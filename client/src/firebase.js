// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-685fa.firebaseapp.com",
  projectId: "mern-blog-685fa",
  storageBucket: "mern-blog-685fa.appspot.com",
  messagingSenderId: "939441732932",
  appId: "1:939441732932:web:abda318943c2a1da7e2b11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);