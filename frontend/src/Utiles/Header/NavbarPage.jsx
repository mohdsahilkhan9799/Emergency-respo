import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoLight from "../../Photos/ERFL LOGO-03.png";  // Default logo
import logoDark from "../../Photos/ERFL LOGO-03.png";  // Scrolled logo

const NavbarPage = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${navbarScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container-fluid">
        {/* Left Logo */}
        <Link to="/" className="navbar-brand">
          <img src={navbarScrolled ? logoDark : logoLight} alt="Logo" className="logo-left" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <span className="close-icon text-white">✖</span> // Close Button
          ) : (
            <>
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
            </>
          )}
        </button>

        {/* Navbar Menu */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            {/* About Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="aboutDropdown" role="button">
                About
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/conference" onClick={() => setIsMenuOpen(false)}>About ERFL Global Summit</Link></li>
                <li><Link className="dropdown-item" to="/speakers" onClick={() => setIsMenuOpen(false)}>Organiser</Link></li>
              </ul>
            </li>

            <li className="nav-item"><Link className="nav-link" to="#" onClick={() => setIsMenuOpen(false)}>Conference</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#" onClick={() => setIsMenuOpen(false)}>Exhibition</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#" onClick={() => setIsMenuOpen(false)}>Visit</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#" onClick={() => setIsMenuOpen(false)}>Partner</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#" onClick={() => setIsMenuOpen(false)}>News & Media</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#" onClick={() => setIsMenuOpen(false)}>Plan Your Trip</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#" onClick={() => setIsMenuOpen(false)}>Register Now</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
