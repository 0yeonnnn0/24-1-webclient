// import './App.css';
import React from "react";
import MainPage from "./front/pages/MainPage.js";
import Header from "./front/components/Header.js";
import { Routes, Route } from "react-router-dom";
import FirebaseLogin from "./front/pages/LoginPage.js";
import About from "./front/pages/About.js";
import NotFound from "./front/pages/NotFound.js";
import Func2Name from "./front/pages/Func2Name.js";
import Name2Func from "./front/pages/Name2Func.js";
import { useState } from "react";
import Mypage from "./front/pages/Mypage.js";
import ChangePW from "./front/components/User/ChangePW.js";
import RegisterUser from "./front/components/User/RegisterUser.js";
import ConvertLog from "./front/pages/ConvertLog.js";

function UseLocalStorage(key, initialState) {
  const [state, setState] = useState(() => {
    console.log(window.localStorage.getItem(key));
    let storedValue = window.localStorage.getItem(key);
    return storedValue !== undefined ? JSON.parse(storedValue) : initialState;
  });

  // useEffect(() => {
  //   window.localStorage.setItem(key, JSON.stringify(state));
  // }, [key, state]);

  return [state, setState];
}

function App() {
  const [user, setUser] = UseLocalStorage("user");

  return (
    <div className="App min-h-screen">
      <Header user={user} />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/login" element={<FirebaseLogin />} />
          <Route path="/changePW" element={<ChangePW />} />
          <Route path="/mypage" element={<Mypage user={user} />} />
          <Route path="/signup" element={<RegisterUser />} />

          <Route path="/about" element={<About />} />
          <Route path="/func2name" element={<Func2Name />} />
          <Route path="/name2func" element={<Name2Func />} />
          <Route path="/convert-log" element={<ConvertLog />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
