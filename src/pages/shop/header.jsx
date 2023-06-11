import React from 'react';
import './Header.css';

export const Header = () => {
    const handleScroll = () => {
        const element = document.getElementById('pro');
    
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Welcome to Plantify</h1>
        <h2>Transform your living space with plants</h2>
        <p className="header-subtitle">Discover amazing plants at great prices</p>
        <button className="header-button" onClick={handleScroll}>
          Shop Now
        </button>
      </div>
    </header>
  );
};