import { createContext, useContext,useEffect,useState } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,

} from "firebase/auth";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user,setUser]=useState("")
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  } 
  function logOut() {
    return signOut(auth)
  } 
  function  googleSignin(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider)
  }

 

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
    })
    return ()=>{
        unsubscribe();
    }
  },[])

  return <userAuthContext.Provider value={{signup,user,login,logOut,googleSignin}}>{children}</userAuthContext.Provider>;
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
