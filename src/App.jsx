import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import DynamicText from "./components/dynamicText/DynamicText";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Services from "./pages/Services";

export default function App() {

  return (
    <Router>
      <div className="w-screen h-screen overflow-x-hidden">
        <Navbar />
        <div className="p-12 xl:px-[250px] md:px-[200px] sm:px-[150px] max-w-full">
          <div className="flex items-center">
              <h1 className="text-[50px] font-black mx-auto">
              💴 Compra al mejor <DynamicText text="precio" />
            </h1>
          </div>
          <hr className="my-6 border border-sandse" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
