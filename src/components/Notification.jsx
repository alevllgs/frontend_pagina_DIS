import React, { useEffect, useState } from "react";
import "../styles/Notification.css";

const Notification = ({ message, onClose }) => {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    // Seleccionamos aleatoriamente un gradiente de las opciones disponibles
    const gradients = [
      "var(--gradient-6)"
    ];
    
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    setGradient(randomGradient);
  }, []);

  if (!message) return null;

  return (
    <div className="notification" style={{ background: gradient }}>
      <p>{message}</p>
      <button className="close-btn" onClick={onClose}>
        ✖
      </button>
    </div>
  );
};

export default Notification;
