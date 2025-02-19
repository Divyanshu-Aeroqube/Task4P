import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import Villas from "./Components/Villas";
import Services from "./Components/Services";
import Partner from "./Components/Partner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import VillaPage from "./Components/VillaPage";

const App = () => {
  return (
    <div  >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<VillaPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;