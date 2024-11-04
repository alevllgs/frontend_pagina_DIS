import React from 'react';
import cardData from '../data/quienesSomosData';
import CardComponent from '../components/CardComponent';
import '../styles/QuienesSomos.css';
import Footer from '../components/Footer';


function QuienesSomos() {
  return (
  <div>
    <div className='texto_quienes_somos'>
    <h2>Sobre Nosotros</h2>
        <p>Esta es la sección principal de nuestra página donde describimos quiénes somos y qué hacemos.</p>
        <h2>Nuestros Servicios</h2>
        <p>Detalles sobre nuestros servicios...</p>
    </div>
    <div className="cards-container">
      {cardData.map((card) => (
        <CardComponent key={card.id} card={card} />
      ))}
    </div>
    <Footer />
    </div>
  );
}

export default QuienesSomos;
