import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        
        Traveloop<span></span>
      </div>

      {/* Hamburger Icon */}
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li>
          <Link to="/" className="active" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/team" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
        <li>
          <Link to="/docs" onClick={() => setIsOpen(false)}>Docs</Link>
        </li>
      </ul>
    </nav>
  );
};
