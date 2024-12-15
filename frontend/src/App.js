import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/User/NavBar";
import Home from "./Components/User/Home";
import Booking from "./Components/User/Booking";

function App() {
  return (
    <>
      <NavBar />
      <div className="main__container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedules" element={<div>Live Tracking Page</div>} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<div>Contact Us Page</div>} />
          <Route path="/contact" element={<div>About Us Page</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;