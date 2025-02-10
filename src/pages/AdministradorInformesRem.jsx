import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx"; // Importar librería para Excel
import "../styles/Administrador.css";

const API_URL = import.meta.env.VITE_API_URL; // URL base del backend

const AdministradorInformesRem = () => {
  const [anio, setAnio] = useState(new Date().getFullYear());
  const [mes, setMes] = useState("01");
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const obtenerInformes = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(`${API_URL}/admin/informes-rem`, {
        params: { anio, mes }
      });
      setDatos(response.data);
    } catch (err) {
      console.error("Error al obtener informes:", err);
      setError("No se pudo obtener los informes. Verifica la conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  // Función para exportar a Excel
  const exportarExcel = () => {
    if (datos.length === 0) {
      alert("No hay datos para exportar.");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(datos);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Informes REM");

    XLSX.writeFile(workbook, `Informe_REM_${anio}_${mes}.xlsx`);
  };

  return (
    <div className="container">
      <h1>Informes REM</h1>

      {/* Selección de Año y Mes */}
      <section>
      <div className="form-group">
        <h2>Reporte de cargas del mes</h2>
        <label>Año:</label>
        <select value={anio} onChange={(e) => setAnio(e.target.value)}>
          {Array.from({ length: 10 }, (_, i) => {
            const year = new Date().getFullYear() - i;
            return <option key={year} value={year}>{year}</option>;
          })}
        </select>
      </div>

      <div className="form-group">
        <label>Mes:</label>
        <select value={mes} onChange={(e) => setMes(e.target.value)}>
          {Array.from({ length: 12 }, (_, i) => {
            const month = (i + 1).toString().padStart(2, "0");
            return <option key={month} value={month}>{month}</option>;
          })}
        </select>
      </div>

      <button onClick={obtenerInformes} disabled={loading}>
        {loading ? "Cargando..." : "Generar Informe"}
      </button>

      {/* Botón para descargar en Excel */}
      {datos.length > 0 && (
        <button onClick={exportarExcel} className="export-btn">
          Descargar en Excel
        </button>
      )}

      {/* Mostrar error si existe */}
      {error && <p className="error">{error}</p>}

      {/* Mostrar tabla si hay datos */}
      {datos.length > 0 ? (
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
            {datos.map((registro) => (
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
        !loading && <p>No hay informes disponibles para el año y mes seleccionados.</p>
      )}
      </section>
      <section>
      <h2>Reporte de pendientes</h2>
      </section>
    </div>
    
  );
  
};

export default AdministradorInformesRem;
