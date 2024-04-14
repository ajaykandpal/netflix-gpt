// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoG_8rkmgIZA9u7xdUho_VfR_tyKB3azo",
  authDomain: "netflixgpt-c5e5f.firebaseapp.com",
  projectId: "netflixgpt-c5e5f",
  storageBucket: "netflixgpt-c5e5f.appspot.com",
  messagingSenderId: "1034066821629",
  appId: "1:1034066821629:web:8d1f4e276272ce765e1994",
  measurementId: "G-RRT2WM1JW6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
