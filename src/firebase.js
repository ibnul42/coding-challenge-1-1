// Import the functions you need from the SDKs you need
import { getFirestore } from '@firebase/firestore';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw46QCByMABbZN-X-vDeuBM898bwVRUVs",
  authDomain: "coding-challenge-1-1.firebaseapp.com",
  projectId: "coding-challenge-1-1",
  storageBucket: "coding-challenge-1-1.appspot.com",
  messagingSenderId: "683642354944",
  appId: "1:683642354944:web:c93e6acb0bc993473187e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)