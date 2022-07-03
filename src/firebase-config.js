// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "asklana-auth.firebaseapp.com",
  projectId: "asklana-auth",
  storageBucket: "asklana-auth.appspot.com",
  messagingSenderId: "128075830388",
  appId: "1:128075830388:web:1e1aca71a6aacf72db2d21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);