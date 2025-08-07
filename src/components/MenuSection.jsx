// src/components/MenuSection.jsx
import React from 'react';

import espressoImg from '../assets/espresso.jpg';
import latteImg from '../assets/latte.jpg';
import icedCoffeeImg from '../assets/ice_coffee.jpg';
import cappucinoImg from '../assets/cappucino.jpg';

const menuItems = [
  {
    name: "Espresso",
    description: "Kopi hitam pekat dengan cita rasa kuat.",
    price: "Rp 18.000",
    image: espressoImg
  },
  {
    name: "Latte",
    description: "Espresso dan susu lembut.",
    price: "Rp 22.000",
    image: latteImg
  },
  {
    name: "Iced Coffee",
    description: "Kopi dingin menyegarkan.",
    price: "Rp 20.000",
    image: icedCoffeeImg
  },
  {
    name: "Cappuccino",
    description: "Espresso, susu dan foam.",
    price: "Rp 24.000",
    image: cappucinoImg
  }
];

function MenuSection() {
  return (
    <section id="menu" className="menu-section">
      <h2>Menu Kami</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
