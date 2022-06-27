import React from 'react';
import logo from '../img/nvidia-logo.png';

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-links__content">
        <div className="navbar-links__left">
          <img className="navbar-logo" alt="logo" src={logo}></img>
          <ul className="navbar-links">
            <li className="navbar-link">Products</li>
            <li className="navbar-link">Solutions</li>
            <li className="navbar-link">Industries</li>
            <li className="navbar-link">For You</li>
          </ul>
        </div>
        <div className="navbar-links__right">
          <ul className="navbar-links">
            <li className="navbar-link">SHOP</li>
            <li className="navbar-link">DRIVERS</li>
            <li className="navbar-link">SUPPORT</li>
          </ul>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-circle-user"></i>
        </div>
      </div>
    </nav>
  );
}
