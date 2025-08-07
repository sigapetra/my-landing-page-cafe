import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css'; 
// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-item">
          <FaMapMarkerAlt /> <span>Jl. Damai Indah No. 12, Senja Kota</span>
        </div>
        <div className="footer-item">
          <FaPhoneAlt /> <span>(021) 123-4567</span>
        </div>
        <div className="footer-item">
          <FaClock /> <span>Senin - Minggu, 09:00 - 22:00 WIB</span>
        </div>
      </div>

      <div className="footer-social">
        <a href="https://instagram.com/kopisenja" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      <p className="copyright">
        © 2025 Kopi Senja. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
