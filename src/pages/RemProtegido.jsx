import React, { useState, useEffect } from "react";
import Footer from "../components/Footer"; // Importar el Footer
import { useUser } from "../context/UserContext"; // Importar el contexto de usuario
import "../styles/RemProtegido.css"; // Importar los estilos específicos para este componente

console.log("🔹 Modo actual:", import.meta.env.MODE);
if (import.meta.env.MODE !== "development") {
  console.log = () => {};
}


const RemProtegido = () => {
  const { email } = useUser(); // Recuperar el correo electrónico del usuario autenticado
  const [files, setFiles] = useState([]); // Estado para almacenar los archivos
  const [serie, setSerie] = useState("SERIE A"); // Estado para la serie seleccionada
  const [anio, setAnio] = useState("2024"); // Estado para el año seleccionado
  const [mes, setMes] = useState("01"); // Estado para el mes seleccionado
  const [message, setMessage] = useState(""); // Estado para mensajes
  const [registros, setRegistros] = useState([]); // Estado para almacenar los registros subidos

  // Obtener registros de archivos subidos desde el backend
  const fetchRegistros = async () => {
    try {
      if (!email) return;
  
      const response = await fetch(`http://127.0.0.1:5000/upload/registros?email=${encodeURIComponent(email)}`);
      if (!response.ok) throw new Error("Error en la respuesta del servidor");
  
      const data = await response.json();
      console.log("🔹 Datos recibidos en React:", data);
      setRegistros(data);  // SOLO SE USAN DATOS DE SQL
    } catch (error) {
      console.error("Error obteniendo registros:", error);
      setMessage("Error cargando registros");
    }
  };
  
  // 🔹 Cargar registros al montar el componente
  useEffect(() => {
    fetchRegistros();
  }, [email]);
  
  
  // Manejo del cambio de archivos
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  // Manejo de cambios en las listas desplegables
  const handleSerieChange = (e) => setSerie(e.target.value);
  const handleAnioChange = (e) => setAnio(e.target.value);
  const handleMesChange = (e) => setMes(e.target.value);

  // Envío de archivos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!files.length || !email) {
      alert("Selecciona archivo y verifica tu sesión");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", files[0]); // Solo un archivo
    formData.append("email", email);
    formData.append("serie", serie);
    formData.append("anio", anio);
    formData.append("mes", mes);
  
    try {
      const response = await fetch("http://127.0.0.1:5000/upload/", {
        method: "POST",
        body: formData,
      });
  
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Error desconocido");
  
      setMessage("Archivo subido correctamente");
  
      // 🔹 En lugar de añadir manualmente los datos, recargar desde SQL
      await fetchRegistros(); 
  
    } catch (error) {
      console.error("Error subiendo archivo:", error);
      setMessage(error.message || "Error en la subida");
    }
  };
  

  return (
    <div className="form-page">
      <div className="dos-columnas">
        <div className="form-container">
          <h1>Subir Archivos REM</h1>
          <form onSubmit={handleSubmit}>
            {/* Lista desplegable para Serie REM */}
            <div className="desplegable">
              <div className="desplegable_orientacion">
                <label htmlFor="serie">Serie REM:</label>
                <select id="serie" value={serie} onChange={handleSerieChange}>
                  <option value="SERIE A">SERIE A</option>
                  <option value="SERIE BS">SERIE BS</option>
                  <option value="SERIE BM">SERIE BM</option>
                  <option value="SERIE D">SERIE D</option>
                  <option value="SERIE P">SERIE P</option>
                </select>
              </div>

              {/* Lista desplegable para Año */}
              <div className="desplegable_orientacion">
                <label htmlFor="anio">Año:</label>
                <select id="anio" value={anio} onChange={handleAnioChange}>
                  {!anio && (
                    <option value="" disabled hidden>
                      Selecciona un año
                    </option>
                  )}
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div>

              {/* Lista desplegable para Mes */}
              <div className="desplegable_orientacion">
                <label htmlFor="mes">Mes:</label>
                <select id="mes" value={mes} onChange={handleMesChange}>
                  <option value="" disabled>
                    Selecciona el mes a subir
                  </option>
                  <option value="01">Enero</option>
                  <option value="02">Febrero</option>
                  <option value="03">Marzo</option>
                  <option value="04">Abril</option>
                  <option value="05">Mayo</option>
                  <option value="06">Junio</option>
                  <option value="07">Julio</option>
                  <option value="08">Agosto</option>
                  <option value="09">Septiembre</option>
                  <option value="10">Octubre</option>
                  <option value="11">Noviembre</option>
                  <option value="12">Diciembre</option>
                </select>
              </div>
            </div>

            <div className="subida">
              <input
                type="file"
                multiple
                accept=".xlsx,.xlsm"
                onChange={handleFileChange}
              />
              <button type="submit">Subir Archivos</button>
            </div>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
        <div className="registros-subidos">
          {/* Tabla de registros subidos */}
          <h2>Registros Subidos</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Establecimiento</th>
                <th>Serie</th>
                <th>Año</th>
                <th>Mes</th>
                <th>Fecha de Recepción</th>
              </tr>
            </thead>

            <tbody>
  {registros.map((registro, index) => {
    // 🔹 Solo imprimir en consola si estamos en modo desarrollo
    if (process.env.NODE_ENV === "development") {
      console.log("🔹 Registro en la tabla:", registro);
    }

    // Convertir la fecha UTC a la zona horaria local
    const fechaLocal = registro.fecha_recepcion 
      ? new Date(registro.fecha_recepcion).toLocaleString("es-CL", { timeZone: "America/Santiago" }) 
      : "No Disponible";

    return (
      <tr key={index}>
        <td>{registro.usuario || "No Disponible"}</td>
        <td>{registro.establecimiento || "No Disponible"}</td>
        <td>{registro.serie || "No Disponible"}</td>
        <td>{registro.anio || "No Disponible"}</td>
        <td>{registro.mes || "No Disponible"}</td>
        <td>{fechaLocal}</td>
      </tr>
    );
  })}
</tbody>


          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RemProtegido;
