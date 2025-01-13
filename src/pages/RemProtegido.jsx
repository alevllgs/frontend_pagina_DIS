import React, { useState } from "react";
import Footer from "../components/Footer"; // Importar el Footer
import "../styles/RemProtegido.css"; // Importar los estilos específicos para este componente

const RemProtegido = () => {
  const [files, setFiles] = useState([]); // Estado para almacenar los archivos
  const [message, setMessage] = useState(""); // Estado para mensajes

  // Manejo del cambio de archivos
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  // Envío de archivos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      alert("Por favor, selecciona al menos un archivo.");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]); // ¡El nombre es importante!
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/upload/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setMessage("Archivos subidos con éxito.");
        console.log(result);
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error de red:", error);
      setMessage("Hubo un problema al conectar con el servidor.");
    }
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h1>Subir Archivos REM</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            multiple
            accept=".xlsx,.xlsm"
            onChange={handleFileChange}
          />
          <button type="submit">Subir Archivos</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default RemProtegido;
