import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  // Set the background color immediately on component mount
  useEffect(() => {
    // Ensure body background matches our app
    document.body.style.backgroundColor = "#1f2937";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    
    // Calculate scrollbar width and set it as a CSS variable
    const calculateScrollbarWidth = () => {
      // Create a div with scrollbars
      const outer = document.createElement("div");
      outer.style.visibility = "hidden";
      outer.style.overflow = "scroll";
      document.body.appendChild(outer);
      
      // Create an inner div
      const inner = document.createElement("div");
      outer.appendChild(inner);
      
      // Calculate the difference between outer width and inner width
      const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
      
      // Remove the divs
      outer.parentNode.removeChild(outer);
      
      // Set the scrollbar width as a CSS variable
      document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    };
    
    calculateScrollbarWidth();
    window.addEventListener('resize', calculateScrollbarWidth);
    
    return () => {
      // Cleanup when component unmounts
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
      window.removeEventListener('resize', calculateScrollbarWidth);
    };
  }, []);
  
  return (
    <div className="bg-[#1f2937] min-h-screen w-full m-0 p-0 flex flex-col">
      <BrowserRouter>
        <Navbar />
        {/* Add padding-top to account for fixed navbar height */}
        <div className="pt-24 flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;