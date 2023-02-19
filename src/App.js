import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Academics from "./screens/Academics";
import Placements from "./screens/Placements";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/academics" element={<Academics />}></Route>
          <Route exact path="/placements" element={<Placements />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/login" element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
