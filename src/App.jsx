import React from 'react';
import Navbar from './components/Navbar'; // Posisikan sebelum Hero Section 
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import './styles/base.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/menu.css';
import './styles/footer.css';
import './styles/responsive.css';
// src/App.jsx


function App() {
  return (
    <>
      <title>Kopi Senja</title>
     
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <Footer />
    </>
  );
}

export default App;
// src/App.jsx