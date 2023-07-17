import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Academics from "./screens/academics/Academics";
import Placements from "./screens/placements/Placements";
import Contact from "./screens/contact/Contact";
import Footer from "./components/Footer";
import Login from "./screens/login/Login";
import Apply from "./screens/login/Apply";
import AcademicInfo from "./screens/academics/AcademicInfo";
import PageNotFound from "./PageNotFound";


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
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/apply" element={<Apply />}></Route>
          <Route exact path="/info" element={<AcademicInfo />}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
