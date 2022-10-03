import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNaZPFLwolOqk3eD89-NdTEdsjLrZ0Hz8",
  authDomain: "bad-bank-c57a6.firebaseapp.com",
  projectId: "bad-bank-c57a6",
  storageBucket: "bad-bank-c57a6.appspot.com",
  messagingSenderId: "206726305084",
  appId: "1:206726305084:web:5f4118e95eab0f8f72ba39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

//adding this to test