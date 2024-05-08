import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword, // 🔥 1
  signInWithEmailAndPassword, // 🔥 2
  onAuthStateChanged, // 🔥 3
  signOut, // 🔥 4
  getAuth, // 🔥 5
  updatePassword, // 🔥 6
  updateProfile,
  sendEmailVerification,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import Login from "../components/User/Login";

function FirebaseLogin() {
  const authService = getAuth(); // 🔥
  const currentUser = authService.currentUser;

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 p-10 flex justify-center">
        <Login authService={authService} />
      </div>
    </div>
  );
}

export default FirebaseLogin;
