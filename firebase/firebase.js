// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQT7XRVB4ea0EFysMa7orMjqIH700aRu4",
  authDomain: "nuxt-interactive-comments-crud.firebaseapp.com",
  projectId: "nuxt-interactive-comments-crud",
  storageBucket: "nuxt-interactive-comments-crud.appspot.com",
  messagingSenderId: "1068915737364",
  appId: "1:1068915737364:web:cd15f6ee3f190bd156f801",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
