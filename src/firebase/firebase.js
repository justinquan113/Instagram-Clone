
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDLYZ-c6OFkRE3xSRcSZkIc8bf71JKxqjs",
  authDomain: "instagram-clone-951b4.firebaseapp.com",
  projectId: "instagram-clone-951b4",
  storageBucket: "instagram-clone-951b4.firebasestorage.app",
  messagingSenderId: "446032739011",
  appId: "1:446032739011:web:3241d206d7d2d21b1e8076",
  measurementId: "G-N51VP1L29L"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export {app, auth, firestore, storage};