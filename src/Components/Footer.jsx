import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links__container">
        <h2>Företagsinformation</h2>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
      </div>
      <div className="footer-links__container">
        <h2>Engagera dig</h2>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
      </div>
      <div className="footer-links__container">
        <h2>Nyheter och evenemang</h2>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
        <Link to="/">LINK</Link>
      </div>
    </footer>
  );
}
