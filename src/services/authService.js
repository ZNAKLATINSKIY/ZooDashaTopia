import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

// регистрация
export async function registerUser(email, password, name) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", userCredential.user.uid), {
    name: name,
    isAdmin: false,
    createdAt: new Date()
  });
}

// вход
export async function loginUser(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}