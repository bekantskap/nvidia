import React from 'react';
import ProductCard from './ProductCard';
import laptop from '../img/nvidia-laptop.jpg';
import graphics from '../img/nvidia-graphics.png';
import geforce from '../img/nvidia-geforce.jpg';
import studio from '../img/nvidia-studio.png';

export default function ProductInfo() {
  return (
    <main className="info-container">
      <h2>KÖP</h2>
      <section className="info-cards">
        <ProductCard
          titlehead={'KÖP'}
          img={laptop}
          title={'NVIDIA rekommenderar'}
          desc={'De bästa erbjudandena på bärbara datorer. Köp nu'}
        />
        <ProductCard
          img={graphics}
          title={'Grafikkort i GeForce RTX-serien'}
          desc={'Nu är NVIDIA GeForce RTX 30-serien tillbaka i lager!'}
        />
        <ProductCard
          img={geforce}
          title={'GFN Thursday'}
          desc={'Se vad du kan streama på GeForce NOW den här veckan'}
        />
        <ProductCard
          img={studio}
          title={'I NVIDIA STUDIO'}
          desc={
            'Vi firar fantastiska konstnärer, inspirerande konst och publicerar nyheter för innehållsskapare varje vecka.'
          }
        />
      </section>
    </main>
  );
}
