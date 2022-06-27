import React from 'react';

export default function ProductCard(props) {
  return (
    <main className="card-container">
      <h2 className="card-title__head">{props.titlehead}</h2>
      <p className="card-desc__head">{props.deschead}</p>
      <section className="card-content">
        <img className="card-image" alt="card" src={props.img} />
        <h3 className="card-title">{props.title}</h3>
        <p className="card-desc">{props.desc}</p>
      </section>
    </main>
  );
}
