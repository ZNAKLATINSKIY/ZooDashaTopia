import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

export async function createAnimal(name, type, areaId) {
  await addDoc(collection(db, "animals"), {
    name: name,
    type: type,
    areaId: areaId,
    ownerId: auth.currentUser.uid,
    createdAt: new Date()
  });
}

export async function getMyAnimals() {
  const q = query(
    collection(db, "animals"),
    where("ownerId", "==", auth.currentUser.uid)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}