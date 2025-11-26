import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  updateDoc,
} from "firebase/firestore";

const getDocId = (sender, receiver) => {
  const users = [sender, receiver].sort();
  return users[0] + "-" + users[1];
};

// READ messages
export const readmessage = createAsyncThunk(
  "chat/read",
  async ({ sender, receiver }) => {
    const docid = getDocId(sender, receiver);
    const q = query(
      collection(db, "chatroom", docid, "chats"),
      orderBy("createdAt", "asc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => d.data());
  }
);

// SEND message (instant UI update)
export const sendmessage = createAsyncThunk(
  "chat/send",
  async ({ message, sender, receiver }, thunkAPI) => {
    try {
      const docid = getDocId(sender, receiver);
      const chatid = Date.now();

      const newChat = {
        chatid,
        message,
        sender,
        receiver,
        createdAt: chatid,
      };

      await setDoc(doc(db, "chatroom", docid, "chats", chatid.toString()), newChat);

      return newChat;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE message
export const deletemessage = createAsyncThunk(
  "chat/delete",
  async ({ sender, receiver, chatid }) => {
    const docid = getDocId(sender, receiver);
    await deleteDoc(doc(db, "chatroom", docid, "chats", chatid.toString()));
    return chatid;
  }
);

// UPDATE message
export const updatemessage = createAsyncThunk(
  "chat/edit",
  async ({ sender, receiver, chatid, newMessage }, thunkAPI) => {
    try {
      const docid = getDocId(sender, receiver);
      await updateDoc(doc(db, "chatroom", docid, "chats", chatid.toString()), {
        message: newMessage,
        edited: true,
        updatedAt: Date.now(),
      });

      return { chatid, newMessage };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const chatslice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    resetChats: (state) => {
      state.chats = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(readmessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(readmessage.fulfilled, (state, action) => {
        state.chats = action.payload;
        state.isLoading = false;
      })
      .addCase(sendmessage.fulfilled, (state, action) => {
        state.chats.push(action.payload);
      })
      .addCase(deletemessage.fulfilled, (state, action) => {
        state.chats = state.chats.filter((c) => c.chatid !== action.payload);
      })
      .addCase(updatemessage.fulfilled, (state, action) => {
        const { chatid, newMessage } = action.payload;
        const index = state.chats.findIndex((c) => c.chatid === chatid);
        if (index !== -1) {
          state.chats[index].message = newMessage;
          state.chats[index].edited = true;
        }
      });
  },
});

export const { resetChats } = chatslice.actions;
export default chatslice.reducer;