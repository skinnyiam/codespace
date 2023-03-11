import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase";

const editDay = async (UID, Documents, time) => {
  try {
    const editDayDocRef = doc(db, "users", `${UID}`, "editDay", `${time}`);

    await setDoc(editDayDocRef, Documents);
  } catch (e) {
    console.log("error", e);
  }
};

const sort = async (UID) => {
  // console.log(UID)
  let data = [];

  try {
    const colRef = collection(db, "users", `${UID}`, "editDay");
    const q = query(colRef, orderBy("date", "desc"));
    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data() });
      });
      // console.log(data);
      return data;
    });
  } catch (err) {
    console.log(err);
  } finally {
    return data;
  }
};

const getDay = async (UID) => {
  let docDay = [];

  try {
    const getDayDocRef = collection(db, "users", `${UID}`, "editDay");
    const data = await getDocs(getDayDocRef);

    docDay = data.docs.map((e) => {
      return { datas: e.data(), id: e.id };
    });
  } catch (e) {
    console.log(e);
  } finally {
    return docDay;
  }
};

const getParticularData = async (UID, id) => {
  let specificData = [];
  try {
    const getDayDocRef = doc(db, "users", `${UID}`, "editDay", `${id}`);
    const data = await getDoc(getDayDocRef);
    specificData = data.data();
    // console.log(data.data())
    // return {data:data.data()}
  } catch (e) {
    console.log(e);
  } finally {
    return specificData;
  }
};

const deleteData = async (UID, id) => {
  console.log(UID, " ", id);
  try {
    const DayCollectionRef = doc(db, "users", `${UID}`, "editDay", `${id}`);
    await deleteDoc(DayCollectionRef);
    console.log("delete success");
  } catch (e) {
    console.log(e);
  }
};

const useFirestore = () => {
  return { editDay, getDay, getParticularData, deleteData, sort };
};

export default useFirestore;
