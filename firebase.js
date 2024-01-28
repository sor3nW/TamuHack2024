// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase } from "firebase/database";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBONOcPwbmTzAmHWKZpWvHzIzgCBmZ4kCg",
    authDomain: "credit-confident.firebaseapp.com",
    projectId: "credit-confident",
    storageBucket: "credit-confident.appspot.com",
    messagingSenderId: "1065351383835",
    appId: "1:1065351383835:web:980114f465eb01e32321be",
    measurementId: "G-YZL1T5GE51"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
