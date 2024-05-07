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
import Login from "./front/components/User/Login.js";

function App() {
  return (
    <div className="App min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/login" element={<FirebaseLogin state={"login"}/>} />
        <Route path="/changePW" element={<FirebaseLogin state={"changePW"}/>} />
        <Route path="/mypage" element={<FirebaseLogin state={"mypage"}/>} />
        <Route path="/signup" element={<FirebaseLogin state={"signup"}/>} />

        <Route path="/about" element={<About />} />
        <Route path="/func2name" element={<Func2Name />} />
        <Route path="/name2func" element={<Name2Func />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
