import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    setDoc,
    updateDoc,
} from "firebase/firestore";
import { firestore } from "../config";


export const saveItem = async (data) => {
    console.log(data);
    await setDoc(doc(firestore, "firebase-crud01", `${Date.now()}`), data, { merge: true })
}

export const getAllData = async () => {
    const allItems = await getDocs(collection(firestore, "firebase-crud01"));
    allItems.docs.map((doc) => doc.data());
}

export const updateItem = async (id, newData) => {
    const updateData = doc(collection(firestore, "test"), id);
    await updateDoc(updateData, newData);
};

export const deleteItem = async (id) => {
    const deleteData = doc(collection(firestore, "test"), id);
    await deleteDoc(deleteData);
};