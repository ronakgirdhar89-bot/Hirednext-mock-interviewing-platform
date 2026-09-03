// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAi78f3USCjTkTWq4-Y2kD9E3xz9KfSgg",
  authDomain: "interviewprep-5ca8a.firebaseapp.com",
  projectId: "interviewprep-5ca8a",
  storageBucket: "interviewprep-5ca8a.firebasestorage.app",
  messagingSenderId: "632652134201",
  appId: "1:632652134201:web:5666989dc4a76dfc0d1ae8",
  measurementId: "G-PE27NPGT3N"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);