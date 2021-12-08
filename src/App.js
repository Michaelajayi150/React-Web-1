import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { Navigate } from "react-router";
import Home from "./components/pages/Home";
import Services from "./components/pages/Service";
import Products from "./components/pages/Products";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
