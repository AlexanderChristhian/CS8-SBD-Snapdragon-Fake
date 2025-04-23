import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  // Set the background color immediately on component mount
  useEffect(() => {
    // Ensure body background matches our app
    document.body.style.backgroundColor = "#1f2937";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    
    return () => {
      // Cleanup when component unmounts
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
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
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;