// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase Cfg
const firebaseConfig = {
  apiKey: "AIzaSyA9Zg72wdpbri9XgGKxoac53vYNtDwfVyc",
  authDomain: "bad-bank-952e1.firebaseapp.com",
  projectId: "bad-bank-952e1",
  storageBucket: "bad-bank-952e1.appspot.com",
  messagingSenderId: "399136284843",
  appId: "1:399136284843:web:d5f97783628206985117ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize the authentication feature
export const auth = getAuth(app);

//Initialize Firestore database
export const db = getFirestore(app)
