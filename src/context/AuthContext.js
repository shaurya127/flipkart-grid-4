import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  updatePassword as updatePasswordAPI,
  sendPasswordResetEmail,
  browserSessionPersistence,
  setPersistence,
  updateProfile,
} from "firebase/auth";


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [idToken, setIdToken] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //console.log("auth state changed");
      setUser(user);
      setLoading(false);
    });
  }, []);

  const signUp = async (email, password) => {
    try {
      const re = await setPersistence(auth, browserSessionPersistence);
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error);
      return error;
    }
  };
  ///signup with email and password and user name
  const signUpWithName = async (email, password, username) => {
    try {
      const re = await setPersistence(auth, browserSessionPersistence);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const updateDisplayName = await updateProfile(auth.currentUser, {
        displayName: username,
      });
    } catch (error) {
      setError(error);
      return error;
    }
  };

  const signIn = async (email, password) => {
    const re = await setPersistence(auth, browserSessionPersistence);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user) {
        const idtoken = await res.user.getIdToken(true);
        setIdToken(idtoken);
        return res;
      }
    } catch (error) {
      setError(error);
      return error;
    }
  };
  const verifyEmail = async () => {
    try {
      const res = await sendEmailVerification(currentUser);
      return res;
    } catch (error) {
      setError(error);
      return error;
    }
  };
  const logout = async () => {
    try {
      const res = await signOut(auth);
      return res;
    } catch (error) {
      setError(error);
      return error;
    }
  };
  const resetPassword = async (email) => {
    try {
      const res = await sendPasswordResetEmail(auth, email);
      return res;
    } catch (error) {
      setError(error);
    }
  };
  const updatePassword = async (password) => {
    try {
      const res = await updatePasswordAPI(currentUser, password);
      return res;
    } catch (error) {
      setError(error);
      return error;
    }
  };

  const value = {
    currentUser, // current user
    signIn, // sign in with email and password
    signUp, // sign up with email and password
    logout, // sign out
    verifyEmail, // send email verification
    resetPassword, // send password reset email
    updatePassword, // update password
    error, // error
    idToken, // id token
    signUpWithName, // sign up with email and password and user name
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
