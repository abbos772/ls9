import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Products from "./components/pages/Products/Products";
import Navbar from "./components/pages/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
