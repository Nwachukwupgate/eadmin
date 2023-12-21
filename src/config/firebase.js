// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfiUg3LhWilzf92MB4o5mnY8T1HkR5ikA",
  authDomain: "sales-c2450.firebaseapp.com",
  projectId: "sales-c2450",
  storageBucket: "sales-c2450.appspot.com",
  messagingSenderId: "303701268347",
  appId: "1:303701268347:web:360ae886580299a6d38fde",
  measurementId: "G-RBJK0J2JH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const imgDb= getStorage(app)