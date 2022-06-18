// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDZIPVqIlW6q5ME_3qoksALathlEjC9sQ",
  authDomain: "auth-development-c7e6c.firebaseapp.com",
  projectId: "auth-development-c7e6c",
  storageBucket: "auth-development-c7e6c.appspot.com",
  messagingSenderId: "323302779086",
  appId: "1:323302779086:web:18ca8fcbddd58dd7ea489f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);