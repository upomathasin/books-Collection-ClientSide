import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getIdToken,
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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        getIdToken(user).then((idToken) =>
          localStorage.setItem("idToken", idToken)
        );
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const val = {
    user: user,
    createUser: createUser,
    loginUser: loginUser,
    signOutUser: signOutUser,
  };
  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
}
