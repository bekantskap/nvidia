import React from 'react';
import hero from '../img/nvidia-hero.jpg';

export default function Hero() {
  return (
    <section className="hero-container">
      <img className="hero-image" alt="hero" src={hero}></img>
    </section>
  );
}
