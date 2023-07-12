import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWiEFh7svz4prYO710BEY2Ku-gFq_7aus",
  authDomain: "chatify1-3c4a5.firebaseapp.com",
  projectId: "chatify1-3c4a5",
  storageBucket: "chatify1-3c4a5.appspot.com",
  messagingSenderId: "640261633842",
  appId: "1:640261633842:web:9b22d454f9be86676dc92b",
  measurementId: "G-ZNQD00Y20W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
