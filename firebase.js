import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRBG--QCxmnVzwpoR6jOF8CVXnxYhFqCA",
  authDomain: "zootopia-2c2b8.firebaseapp.com",
  projectId: "zootopia-2c2b8",
  storageBucket: "zootopia-2c2b8.firebasestorage.app",
  messagingSenderId: "577644999831",
  appId: "1:577644999831:web:b1acf8b4b741ebb7fc65d2",
  measurementId: "G-FYCEQ82SMS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
