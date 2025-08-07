import React from 'react';

import heroBg from '../assets/coffeeshop.jpg';

const sectionStyle = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '90vh',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '200px 40px',
};

function HeroSection() {
  return (
    <section className="hero-section" id="hero" style={sectionStyle}>
      <h1>Kopi Senja: Hangatnya Kisah di Setiap Tegukan</h1>
      <p>Nikmati suasana nyaman dan kopi pilihan terbaik di kota.</p>
    </section>
  );
}

export default HeroSection;

// src/components/HeroSection.jsx
// import React from 'react';
//  function HeroSection() {
//   return (
//     <section id="hero" className="hero-section">
//       <div className="hero-content">
//         <h1>Kopi Senja: Hangatnya Kisah di Setiap Tegukan</h1>
//         <p>Nikmati suasana nyaman dan kopi pilihan terbaik di kota.</p>
//         <button onClick={scrollToMenu}>Lihat Menu Kami</button>
//       </div>
//     </section>
//   );
// }
//
// export default HeroSection;    