import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword, // 🔥 1
  signInWithEmailAndPassword, // 🔥 2
  onAuthStateChanged, // 🔥 3
  signOut, // 🔥 4
  getAuth, // 🔥 5
  updatePassword, // 🔥 6
} from "firebase/auth";
import { auth } from "../../firebase";
import { Route, Routes } from "react-router-dom";
import Login from "../components/User/Login";
import RegisterUser from "../components/User/RegisterUser";
import ChangePW from "../components/User/ChangePW";
import NotFound from "./NotFound";

function FirebaseLogin({ state }) {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [user, setUser] = useState({});

  const auth2 = getAuth(); // 🔥 5
  const currentUser = auth2.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      // 🔥 3
      setUser(currentUser);
    });
  }, [user]);

  console.log(user);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 p-10 flex justify-center">
        {state == "login" ? (
          <Login
            loginEmail={loginEmail}
            setLoginEmail={setLoginEmail}
            loginPassword={loginPassword}
            setLoginPassword={setLoginPassword}
          />
        ) : state == "signup" ? (
          <RegisterUser
            registerEmail={registerEmail}
            setRegisterEmail={setRegisterEmail}
            registerPassword={registerPassword}
            setRegisterPassword={setRegisterPassword}
          />
        ) : state == "changePW" ? (
          <ChangePW
            user={user}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
          />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}

export default FirebaseLogin;
