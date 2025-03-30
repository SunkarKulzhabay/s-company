// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Импорт Footer
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container mt-5 pt-5 content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;