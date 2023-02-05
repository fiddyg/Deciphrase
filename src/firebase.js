// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {collection, doc, getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfk4XyhrPxSF1rCnam5bN8r_AmiiXbVzE",
  authDomain: "deciphrase.firebaseapp.com",
  projectId: "deciphrase",
  storageBucket: "deciphrase.appspot.com",
  messagingSenderId: "533668737960",
  appId: "1:533668737960:web:ddd67fa15ab18136dee39d",
  measurementId: "G-PGFWX31JXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);