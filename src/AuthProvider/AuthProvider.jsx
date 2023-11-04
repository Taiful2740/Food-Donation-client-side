import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import { createContext, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
// const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   const createUser = (email, password) => {
  //     setLoading(true);
  //     return createUserWithEmailAndPassword(auth, email, password);
  //   };

  //   const signInUser = (email, password) => {
  //     setLoading(true);
  //     return signInWithEmailAndPassword(auth, email, password);
  //   };

  //   const profileUpdate = profile => {
  //     return updateProfile(auth.currentUser, profile);
  //   };

  //   const signInWithGoogle = () => {
  //     setLoading(true);
  //     return signInWithPopup(auth, googleProvider);
  //   };

  //   const logOut = () => {
  //     setLoading(true);
  //     return signOut(auth);
  //   };

  // auth state change

  //   useEffect(() => {
  //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
  //       console.log("current", currentUser);
  //       setUser(currentUser);
  //       setLoading(false);
  //     });
  //     return () => {
  //       unSubscribe();
  //     };
  //   }, []);

  const authInfo = {
    user,
    loading,
    // createUser,
    // signInUser,
    // logOut,
    // profileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
