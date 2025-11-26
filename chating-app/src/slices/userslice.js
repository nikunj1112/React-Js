import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, provider } from "../firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";



// 🔹 Sign In (email/password)
export const signin = createAsyncThunk("user/signin", async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = {
    name: userCredential.user.displayName,
    email: userCredential.user.email,
  };
  return user;
});

// 🔹 Sign Up
export const signup = createAsyncThunk("user/signup", async ({ email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = {
    name: userCredential.user.displayName,
    email: userCredential.user.email,
  };
  return user;
});

// 🔹 Fetch all users from Firestore
export const fetchusers = createAsyncThunk("user/fetch", async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
});

// 🔹 Sign In with Google
export const signinwithgoogles = createAsyncThunk("user/google", async (_, thunkAPI) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = {
      name: result.user.displayName,
      email: result.user.email,
      photo: result.user.photoURL,
    };
    await setDoc(doc(db, "users", result.user.uid), user, { merge: true });
    alert("Sign in with Google successful!!");
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// 🔹 Initial State
const initialstate = {
  users: [],
  isLoading: false,
  error: null,
  currentuser:{},
};

// 🔹 Slice
const userslice = createSlice({
  name: "user",
  initialState: initialstate,
  reducers:{
     getUser:(state)=>{
      state.currentuser=JSON.parse(localStorage.getItem("user")||"{}");
     },
  },
  extraReducers: (builder) => {
    builder
      // Email/Password Sign In
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
       
       const user=action.payload;
        const exists = state.users.some((u) => u.email === action.payload.email);
        if (!exists) state.users.push(action.payload);
        localStorage.setItem("user",JSON.stringify(user));
        state.currentuser=user;
        state.isLoading=false;
      
        
      

      })
      .addCase(signin.rejected, (state) => {
        state.isLoading = false;
        state.error = "Sign in failed!!";
      })

      // Sign Up
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        const exists = state.users.some((u) => u.email === action.payload.email);
        if (!exists) state.users.push(action.payload);
        alert("Signup successfully!!");
      })
      .addCase(signup.rejected, (state) => {
        state.isLoading = false;
        state.error = "Signup failed!!";
      })

      // Fetch Users
      .addCase(fetchusers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })

      // ✅ Google Sign In (fixed)
      .addCase(signinwithgoogles.fulfilled, (state, action) => {
        state.isLoading = false;
        const exists = state.users.some((u) => u.email === action.payload.email);
        if (!exists) state.users.push(action.payload);
      })
      .addCase(signinwithgoogles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userslice.reducer;
export const {getUser} = userslice.actions;