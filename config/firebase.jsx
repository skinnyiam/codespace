import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey:"AIzaSyALsNiy-ElNjDuaQwrV8YcRQ5WSNslwY4I",
  authDomain:"codespace-4386c.firebaseapp.com",
  projectId: "codespace-4386c",
  storageBucket: "codespace-4386c.appspot.com",
  messagingSenderId: "33402671247",
  appId: "1:33402671247:web:ed7d2d55dc0a5a60d920fa",
  measurementId: "G-0JEHZYD9DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export default app;
