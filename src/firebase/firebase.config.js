// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4l60ZR1Ti2iFnAEktgyCiQXaA6QWnvHI",
  authDomain: "assignment-10-cba5a.firebaseapp.com",
  projectId: "assignment-10-cba5a",
  storageBucket: "assignment-10-cba5a.appspot.com",
  messagingSenderId: "8123918725",
  appId: "1:8123918725:web:32db28057f950b528c7cec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
