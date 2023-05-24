import {
  collection,
  doc,
  addDoc,
  getDoc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "utils/fireabase";

const useFireStore = () => {
  const createData = async (
    data: Object,
    path: string,
    ...pathSegments: string[]
  ) => {
    try {
      const docRef = await addDoc(collection(db, path, ...pathSegments), data);
      return docRef.id;
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const createDataWithId = async (
    data: Object,
    path: string,
    ...pathSegments: string[]
  ) => {
    try {
      await setDoc(doc(db, path, ...pathSegments), data);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const readData = async (path: string) => {
    try {
      const dataSnap = await getDoc(doc(db, path));
      return dataSnap.data();
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const updateData = async (path: string, data: any) => {
    try {
      await updateDoc(doc(db, path), data);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const deleteData = async (path: string) => {
    try {
      await deleteDoc(doc(db, path));
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  return { createData, readData, updateData, deleteData, createDataWithId };
};

export default useFireStore;
