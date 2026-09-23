// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsmT3r-DatiOumrizNAhG39S6mqNw_Nvk",
  authDomain: "smart-deals-4e4a1.firebaseapp.com",
  projectId: "smart-deals-4e4a1",
  storageBucket: "smart-deals-4e4a1.firebasestorage.app",
  messagingSenderId: "146559222994",
  appId: "1:146559222994:web:a90ed6b82aa37ddcfb990b",
  measurementId: "G-TVLPH2HP0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)