import React from 'react';
import { Link } from 'react-scroll';
import '../styles/navbar.css'; // ← naik satu folder ke `styles/`

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="hero" smooth={true} duration={500} offset={-80} className="nav-link">Home</Link>
      <Link to="about" smooth={true} duration={500} offset={-80} className="nav-link">About</Link>
      <Link to="menu" smooth={true} duration={500} offset={-80} className="nav-link">Menu</Link>
      <Link to="contact" smooth={true} duration={500} offset={-80} className="nav-link">Contact</Link>
    </nav>
  );
};

export default Navbar;
