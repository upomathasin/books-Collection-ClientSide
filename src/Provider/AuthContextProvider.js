import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const auth = getAuth(app);

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const signOutUser = async () => {
  return signOut(auth);
};
export const AuthContext = createContext(null);
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);
  const val = {
    user: user,
    createUser: createUser,
    loginUser: loginUser,
    signOutUser: signOutUser,
  };
  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
}
