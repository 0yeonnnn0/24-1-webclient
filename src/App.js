// import './App.css';
import React from "react";
import MainPage from "./front/pages/MainPage.js";
import Header from "./front/components/Header.js";
import { Routes, Route } from "react-router-dom";
import Login from "./front/pages/Login.js";
import About from "./front/pages/About.js";
import NotFound from "./front/pages/NotFound.js";
import Func2Name from "./front/pages/Func2Name.js";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="func2name" element={<Func2Name />} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
