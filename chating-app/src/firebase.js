// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvj19t8mYMvm7g7B6AFdNq2FMGi1s5rKE",
    authDomain: "chating-app-83436.firebaseapp.com",
    projectId: "chating-app-83436",
    storageBucket: "chating-app-83436.firebasestorage.app",
    messagingSenderId: "1039297772988",
    appId: "1:1039297772988:web:66160a7e18f3c387093fb9",
    measurementId: "G-81MP77TPTF"
  };

// Initialize Firebases
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
