import Nav from "./Nav";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Pages from "./Components/Pages";
import Support from "./Components/Support";
import Services from "./Components/Services";
import Whoweare from "./Components/Whoweare";

function App() {
  
  return (
    <>
    <Nav />

    <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/Aboutus" element={<Aboutus />}/>
    <Route path="/Contact" element={<Contact />}/>
    <Route path="/Project" element={<Project />}/>
    <Route path="/Pages" element={<Pages />}/>
    <Route path="/Support" element={<Support />}/>
    <Route path="/Services" element={<Services />}/>
    <Route path="/Whoweare" element={<Whoweare />}/>

    </Routes>
    </>  
  );
}

export default App;

