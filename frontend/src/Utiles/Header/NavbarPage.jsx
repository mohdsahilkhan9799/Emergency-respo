import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Navbar.css"; // Custom CSS
import { Typewriter } from "react-simple-typewriter";

const NavbarPage = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* ---------- TOP BAR ---------- */}
      <div className="custom-top-bar text-white d-flex justify-content-center justify-content-md-between align-items-center py-2 px-3">
        <small className="mb-0  d-md-inline ">
        <Typewriter
  words={[
    "Under the Patronage of H.E. Khalid Al Salem, President, Royal Commission for Jubail and Yanbu (RCJY), Kingdom of Saudi Arabia"
  ]}
  loop={true}
  cursor
  cursorStyle="|"
  typeSpeed={50}  // Slower typing speed
  deleteSpeed={30} // Slower deletion speed
  delaySpeed={1500} // Delay before retyping
/>

            
        </small>
        <div className="d-flex align-items-center">
          <span className="me-2 fw-semibold d-none d-md-inline">Follow Us</span>
          <a href="#" className="custom-social-icon"><FaFacebookF /></a>
          <a href="#" className="custom-social-icon"><FaInstagram /></a>
          <a href="#" className="custom-social-icon"><FaTwitter /></a>
          <a href="#" className="custom-social-icon"><FaLinkedin /></a>
        </div>
      </div>

      {/* ---------- MIDDLE HEADER ---------- */}
      <div className="custom-middle-header bg-white">
        <div className="container py-3">
          <div className="row align-items-center">
            {/* Logo & Title */}
            <div className="col-12 col-lg-5 d-flex align-items-center " >
              <img
                src="https://erfl.org/demo2025.3/img/logo.jpg"
                alt="Event Logo"
                className="custom-logo-img me-3"
              />
            </div>
            {/* Supported & Organized By */}
            <div className="col-12 col-lg-7 d-none d-lg-flex justify-content-end align-items-center ">
              <div className="text-center me-4">
                <p className="mb-1 fw-semibold">Supported By</p>
                <img
                  src="https://erfl.org/demo2025.3/img/hrd-supported-logo.png"
                  alt="Supported By"
                  className="custom-support-img"
                />
              </div>
              <div className="text-center">
                <p className="mb-1 fw-semibold">Organized By</p>
                <img
                  src="https://erfl.org/demo2025.3/img/org-logo.png"
                  alt="Organized By"
                  className="custom-support-img"
                  style={{ height: "70px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- BOTTOM NAVBAR ---------- */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-bg-gradient shadow-sm">
        <div className="container">
          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>


            {/* Desktop Navigation */}
            <div className="collapse navbar-collapse" id="customMainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">About</a>
              </li>

              {/* Conference Dropdown */}
              <li className="nav-item dropdown custom-dropdown">
                <a
                  className="nav-link dropdown-toggle custom-nav-link"
                  onClick={() => handleDropdownToggle('conference')}
                >
                  Conference
                </a>
                <ul className={`dropdown-menu custom-dropdown-menu ${openDropdown === 'conference' ? 'show' : ''}`}>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">About Conference</a></li>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Past Speakers</a></li>
                </ul>
              </li>
              {/* Exhibition Dropdown */}
              <li className="nav-item dropdown custom-dropdown">
                <a
                  className="nav-link dropdown-toggle custom-nav-link"
                  onClick={() => handleDropdownToggle('Exhibition')}
                >
                  Exhibition
                </a>
                <ul className={`dropdown-menu custom-dropdown-menu ${openDropdown === 'Exhibition' ? 'show' : ''}`}>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">About Exhibition</a></li>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Past Exhibition</a></li>
                </ul>
              </li>
              {/* Partner Dropdown */}
              <li className="nav-item dropdown custom-dropdown">
                <a
                  className="nav-link dropdown-toggle custom-nav-link"
                  onClick={() => handleDropdownToggle('Partner')}
                >
                  Partner
                </a>
                <ul className={`dropdown-menu custom-dropdown-menu ${openDropdown === 'Partner' ? 'show' : ''}`}>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Past Sponser</a></li>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Past endorsers</a></li>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Past Media</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">Contact Us</a>
              </li>

            </ul>
            <div className="d-flex">
              <button className="btn custom-btn-registration">Registration ⬇</button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>✖</button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">About</a>
              </li>

              {/* Conference Dropdown */}
              <li className="nav-item dropdown custom-dropdown">
                <a
                  className="nav-link dropdown-toggle custom-nav-link"
                  onClick={() => handleDropdownToggle('conference')}
                >
                  Conference
                </a>
                <ul className={`dropdown-menu custom-dropdown-menu ${openDropdown === 'conference' ? 'show' : ''}`}>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">About Conference</a></li>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Past Speakers</a></li>
                </ul>
              </li>
              {/* Exhibition Dropdown */}
              <li className="nav-item dropdown custom-dropdown">
                <a
                  className="nav-link dropdown-toggle custom-nav-link"
                  onClick={() => handleDropdownToggle('Exhibition')}
                >
                  Exhibition
                </a>
                <ul className={`dropdown-menu custom-dropdown-menu ${openDropdown === 'Exhibition' ? 'show' : ''}`}>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">About Exhibition</a></li>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Past Exhibition</a></li>
                </ul>
              </li>
              {/* Partner Dropdown */}
              <li className="nav-item dropdown custom-dropdown">
                <a
                  className="nav-link dropdown-toggle custom-nav-link"
                  onClick={() => handleDropdownToggle('Partner')}
                >
                  Partner
                </a>
                <ul className={`dropdown-menu custom-dropdown-menu ${openDropdown === 'Partner' ? 'show' : ''}`}>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Past Sponser</a></li>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Past endorsers</a></li>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Past Media</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">Contact Us</a>
              </li>

               {/* Supported & Organized By */}
            <div className="col-12 col-lg-7 ">
              <div className="text-center me-4">
                <p className="mb-1 fw-semibold">Supported By</p>
                <img
                  src="https://erfl.org/demo2025.3/img/hrd-supported-logo.png"
                  alt="Supported By"
                  className="custom-support-img"
                />
              </div>
              <div className="text-center">
                <p className="mb-1 fw-semibold">Organized By</p>
                <img
                  src="https://erfl.org/demo2025.3/img/org-logo.png"
                  alt="Organized By"
                  className="custom-support-img"
                  style={{ height: "70px" }}
                />
              </div>
            </div>
            </ul>
          </div>

        
        </div>
      </nav>
    </>
  );
};

export default NavbarPage;
