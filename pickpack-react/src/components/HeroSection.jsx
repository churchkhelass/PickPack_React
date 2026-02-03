import React from 'react';

const HeroSection = ({ onConnect }) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h2>Оптимизируйте свои складские операции</h2>
        <p className="hero-description">
          Pick Pack — интуитивное приложение для управления складом, 
          которое повышает эффективность и снижает количество ошибок.
        </p>
        <button className="connect-button" onClick={onConnect}>
          Подключить складского помощника
        </button>
      </div>
    </div>
  );
};

export default HeroSection;