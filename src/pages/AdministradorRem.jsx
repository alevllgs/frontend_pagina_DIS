import React, { useState, useEffect } from "react";
import "../styles/Administrador.css";

const API_URL = import.meta.env.VITE_API_URL; // URL base del backend

const AdministradorRem = () => {
  const [informes, setInformes] = useState([]);
  const [anio, setAnio] = useState(new Date().getFullYear());
  const [mes, setMes] = useState("01");

  useEffect(() => {
    cargarInformes();
  }, [anio, mes]);

  // Obtener lista de informes desde el backend
  const cargarInformes = async () => {
    try {
      const response = await fetch(`${API_URL}/admin/informes-rem?anio=${anio}&mes=${mes}`);
      if (!response.ok) throw new Error("Error al cargar informes");
      const data = await response.json();
      setInformes(data);
    } catch (error) {
      console.error("Error al cargar informes:", error);
      alert("Error al cargar informes");
    }
  };

  return (
    <div className="container">
      <h1>Panel de Administración - Informes REM</h1>

      {/* Formulario para seleccionar año y mes */}
      <section>
        <h2>Seleccionar Año y Mes</h2>
        <div className="form-grid">
          <select value={anio} onChange={(e) => setAnio(e.target.value)}>
            {Array.from({ length: 5 }, (_, i) => {
              const year = new Date().getFullYear() - i;
              return <option key={year} value={year}>{year}</option>;
            })}
          </select>

          <select value={mes} onChange={(e) => setMes(e.target.value)}>
            {Array.from({ length: 12 }, (_, i) => {
              const month = (i + 1).toString().padStart(2, "0");
              return <option key={month} value={month}>{month}</option>;
            })}
          </select>

          <button onClick={cargarInformes}>Cargar Informes</button>
        </div>
      </section>

      {/* Tabla de Informes */}
      <section>
        <h2>Lista de Informes</h2>
        {informes.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Establecimiento</th>
                <th>Serie</th>
                <th>Año</th>
                <th>Mes</th>
                <th>Fecha Recepción</th>
              </tr>
            </thead>
            <tbody>
              {informes.map((registro) => (
                <tr key={registro.id}>
                  <td>{registro.id}</td>
                  <td>{registro.usuario}</td>
                  <td>{registro.establecimiento}</td>
                  <td>{registro.serie}</td>
                  <td>{registro.anio}</td>
                  <td>{registro.mes}</td>
                  <td>{new Date(registro.fecha_recepcion).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay informes disponibles para el año y mes seleccionados.</p>
        )}
      </section>
    </div>
  );
};

export default AdministradorRem;

