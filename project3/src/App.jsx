import React from "react";
import { Start,Gameboard } from "./components/index.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/games" element={<Gameboard />} />
      </Routes>
    </>
  );
}

export default App;
