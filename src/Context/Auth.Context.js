import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import app from "../Configs/firebase.config";
import { toast } from "react-hot-toast";
export const AuthContext = createContext();
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  const githubSignIn = () => {
    return signInWithPopup(auth, GithubProvider);
  };
  const deleteProfile = () => {
    deleteUser(auth.currentUser)
      .then(() => {
        toast.error("User deleted successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const updateMail = (mail) => {
    return updateEmail(auth.currentUser, mail);
  };
  const updatePass = (pass) => {
    return updatePassword(auth.currentUser, pass);
  };
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
    };
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signUp,
    updateUser,
    verifyEmail,
    resetPassword,
    logIn,
    logOut,
    googleSignIn,
    githubSignIn,
    deleteProfile,
    updateMail,
    updatePass,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
