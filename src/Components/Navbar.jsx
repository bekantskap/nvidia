import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <img className="navbar-logo" alt="logo"></img>
      <div className="navbar-links__left">
        <ul>
          <li>Products</li>
          <li>Solutions</li>
          <li>Industries</li>
          <li>For You</li>
        </ul>
      </div>
    </nav>
  );
}
