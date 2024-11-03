import React from 'react';
import cardData from '../data/quienesSomosData';
import CardComponent from '../components/CardComponent';
import '../styles/QuienesSomos.css';

function QuienesSomos() {
  return (
    <div className="cards-container">
      {cardData.map((card) => (
        <CardComponent key={card.id} card={card} />
      ))}
    </div>
  );
}

export default QuienesSomos;
