
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarstyles.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Public Transport Navigator</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/schedules">Live Tracking</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/about">Contact Us</Link></li>
        <li><Link to="/contact">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;