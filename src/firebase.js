// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-bog.firebaseapp.com",
  projectId: "next-bog",
  storageBucket: "next-bog.firebasestorage.app",
  messagingSenderId: "610444914639",
  appId: "1:610444914639:web:e679b9b1001c78f8ba6cba",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
