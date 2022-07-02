import React from 'react';
import { Link } from 'react-router-dom';

export default function Footerlinks(props) {
  return (
    <div className="footer-links__container">
      <h2>{props.title}</h2>
      <Link to={props.path}>{props.link}</Link>
    </div>
  );
}
