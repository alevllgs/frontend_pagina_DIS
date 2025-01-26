import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Importar el contexto de usuario
import "../styles/Registro.css"; // Importar estilos originales

const Registro = () => {
  const { email, setEmail } = useUser(); // Acceso al contexto para manejar el correo
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Credenciales ficticias
  const mockEmail = "usuario@ejemplo.com";
  const mockPassword = "45231530";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    // Validar credenciales ficticias
    if (email === mockEmail && password === mockPassword) {
      setError("");
      console.log("Inicio de sesión exitoso.");
      navigate("/subir_rem"); // Redirige a la página protegida
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  return (
    <div className="form-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Captura el correo en el contexto
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Captura la contraseña
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Registro;
