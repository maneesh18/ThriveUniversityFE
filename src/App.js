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
import Apply from "./screens/login/Apply";
import AcademicInfo from "./screens/academics/AcademicInfo";
import PageNotFound from "./PageNotFound";


function App() {
  const url = "https://Maneesh18.github.io/ThriveUniversityFE"
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Routes>
          <Route exact path={url+"/"} element={<Home />}></Route>
          <Route exact path={url+"/about"} element={<About />}></Route>
          <Route exact path={url+"/academics"} element={<Academics />}></Route>
          <Route exact path={url+"/placements"} element={<Placements />}></Route>
          <Route exact path={url+"/contact"} element={<Contact />}></Route>
          <Route exact path={url+"/apply"} element={<Apply />}></Route>
          <Route exact path={url+"/info"} element={<AcademicInfo />}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
