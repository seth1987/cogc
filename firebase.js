// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6e5tIJ2TGxF-SU79HjEeKYpcnFP3wEy8",
  authDomain: "cogc-paris-nord-9a163.firebaseapp.com",
  projectId: "cogc-paris-nord-9a163",
  storageBucket: "cogc-paris-nord-9a163.appspot.com",
  messagingSenderId: "769775504383",
  appId: "1:769775504383:web:bf32c17ebc118ebd61f5ca",
  measurementId: "G-MSTNNRZ9G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
