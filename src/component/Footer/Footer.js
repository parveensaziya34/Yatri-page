import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Logo */}
        <div className="footer-logo">
          <img src="/image copy.png" alt="Yatri Cabs Logo" />
        </div>
        
        <div className="footer-content">
          <div className="footer-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Condition</a></li>
            </ul>
          </div>
          
          <div className="copyright">
            <p>All Copyrights are reserved by YATRI CABS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;