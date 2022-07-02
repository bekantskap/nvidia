import React from 'react';

export default function ProductCard(props) {
  return (
    <main className="card-container">
      <section className="card-content">
        <img className="card-image" alt="card" src={props.img} />
        <div className="card-text">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-desc">{props.desc}</p>
        </div>
      </section>
    </main>
  );
}
