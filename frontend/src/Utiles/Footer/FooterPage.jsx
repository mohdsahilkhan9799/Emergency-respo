import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./FooterPage.css";

const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About Section */}
        <div className="footer-section about">
          <img src="https://erfl.org/demo2025.3/img/logo.jpg" alt="Main Logo" className=""width={300} />
            
          <p className="footer-text py-3">
            Global summit for emergency response and fire safety leadership.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/conference" className="footer-link">Conference</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">123 Main Street, Riyadh, Saudi Arabia</p>
          <p className="footer-text">Email: info@fireleadership.com</p>
          <p className="footer-text">Phone: +966 123 456 789</p>
        </div>

        {/* Secondary Logo */}
        <div className="footer-section powered">
          <img src="https://erfl.org/demo2025.3/img/hrd-supported-logo.png" alt="Secondary Logo" className="footer-logo" />
          <h3 className="footer-heading">Powered by Fire Safety Experts</h3>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="footer-social mb-3">
        <a href="#" className="social-icon"><FaFacebookF /></a>
        <a href="#" className="social-icon"><FaTwitter /></a>
        <a href="#" className="social-icon"><FaInstagram /></a>
        <a href="#" className="social-icon"><FaLinkedinIn /></a>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Emergency Response & Fire Leadership. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterPage;
