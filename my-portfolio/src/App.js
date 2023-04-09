import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import More from "./components/More";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CompleteAbout from "./components/CompleteAbout";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<CompleteAbout />} />
      </Routes>
    </div>
  );
}

export default App;
