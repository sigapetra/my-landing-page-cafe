import React from 'react';
import { Element } from 'react-scroll';
import '../styles/about.css'; // Pastikan path ini sesuai dengan struktur folder Anda
// src/components/AboutSection.jsx

function AboutSection() {
  return (
    <Element name="about" className="about">
      <h2>Tentang Kopi Senja</h2>
      <p>
        Kopi Senja didirikan dengan semangat untuk menciptakan ruang di mana setiap orang bisa menikmati kopi berkualitas tinggi sambil merasakan ketenangan dan kehangatan. Kami memilih biji kopi terbaik dari petani lokal dan menyajikannya dengan sepenuh hati.
      </p>
      <p>
        Lebih dari sekadar kafe, Kopi Senja adalah tempat berkumpulnya ide, cerita, dan tawa.
      </p>
    </Element>
  );
}
export default AboutSection;
// // src/components/AboutSection.jsx