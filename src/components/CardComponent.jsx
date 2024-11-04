// src/components/CardComponent.jsx
import React from 'react';
import '../styles/CardComponent.css'; // Archivo CSS con estilos para la tarjeta

const CardComponent = ({ card }) => (
  <div className="card-item">
    <img src={card.imgSrc} alt="Imagen de la tarjeta" className="card-image" />
    <div className="card-body">
      <h5 className="card-title">{card.nombre}</h5>
      <p className="card-text">{card.cargo}</p>
      <p className="card-text">{card.titulo}</p>
      <p className="card-text">{card.correo}</p>
      <p className="card-text">{card.fono}</p>
    </div>
    
  </div>
);

export default CardComponent;

