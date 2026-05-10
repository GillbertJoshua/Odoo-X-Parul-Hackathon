import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="nav-logo">HACKATHON<span>X</span></div>
          <p>Empowering innovators to build the future, one line of code at a time.</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/team">Team</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Connect</h4>
          <p>Email: hello@hackathonx.com</p>
          <div className="social-icons">
             {/* Add icons here later */}
             <span>Twitter</span> | <span>GitHub</span> | <span>Discord</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} HackathonX. All rights reserved.
      </div>
    </footer>
  );
};
