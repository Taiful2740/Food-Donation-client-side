// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1ZUva5xjoOaRE69TlH4ioFO3zeFgnl2o",
  authDomain: "assignment-11-d95b3.firebaseapp.com",
  projectId: "assignment-11-d95b3",
  storageBucket: "assignment-11-d95b3.appspot.com",
  messagingSenderId: "469810134094",
  appId: "1:469810134094:web:766d2c2085eccf8765171f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
