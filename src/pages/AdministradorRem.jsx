import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx"; // Importar la librería xlsx
import "../styles/AdministradorInformesRem.css";

const API_URL = import.meta.env.VITE_API_URL; // URL base del backend

const AdministradorRem = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    establecimiento: "",
    nombre: "",
    email: "",
    clave: "",
    rol: "usuario", // Rol predeterminado
  });

  const [adminParams, setAdminParams] = useState({
    serie: "",
    version: "",
  });

  const [parametros, setParametros] = useState([]);
  const [archivo, setArchivo] = useState(null);

  useEffect(() => {
    cargarUsuarios();
    cargarParametros();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/usuarios`);
      if (!response.ok) throw new Error("Error al cargar usuarios");
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error(error);
      alert("Error al cargar usuarios");
    }
  };

  const cargarParametros = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/params`);
      if (!response.ok) throw new Error("Error al cargar parámetros");
      const data = await response.json();
      setParametros(data);
    } catch (error) {
      console.error("Error al cargar parámetros:", error);
    }
  };

  const handleNuevoUsuarioChange = (e) => {
    setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
  };

  const handleAdminParamsChange = (e) => {
    setAdminParams({ ...adminParams, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArchivo(file);
      leerVersionDesdeXLSM(file);
    }
  };

  const leerVersionDesdeXLSM = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        // Verificar que exista la hoja "NOMBRE"
        const sheetName = workbook.SheetNames.find((name) => name === "NOMBRE");
        if (!sheetName) {
          alert("Error: El archivo no contiene la hoja 'NOMBRE'");
          return;
        }

        const worksheet = workbook.Sheets[sheetName];

        // Obtener celda A9
        const cellA9 = worksheet["A9"];
        if (!cellA9) {
          alert("Error: No se encontró la celda A9 en la hoja NOMBRE");
          return;
        }

        setAdminParams((prev) => ({
          ...prev,
          version: cellA9.v.toString(),
        }));
      } catch (error) {
        console.error("Error al leer el archivo:", error);
        alert("Error procesando el archivo. Verifica el formato.");
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const subirArchivo = async () => {
    if (!archivo) {
        alert("Debe seleccionar un archivo");
        return;
    }

    if (!adminParams.serie) {
        alert("Debe seleccionar una serie antes de subir el archivo");
        return;
    }

    const formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("serie", adminParams.serie);  // Aseguramos que se envíe la serie

    try {
        const response = await fetch(`${API_URL}/upload/upload-xlsm`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Error al subir el archivo");
        }

        const data = await response.json();
        alert(`Archivo subido con éxito. Versión detectada: ${data.version}`);

        // Actualizar la versión en el estado
        setAdminParams((prev) => ({ ...prev, version: data.version }));
    } catch (error) {
        console.error("Error al subir archivo:", error);
        alert("Error al subir el archivo");
    }
};


  // Agregar un nuevo usuario
  const agregarUsuario = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoUsuario),
      });
      if (!response.ok) {
        const error = await response.json();
        alert(error.error);
        return;
      }

      const data = await response.json();
      alert(data.message);
      cargarUsuarios();
    } catch (error) {
      console.error(error);
      alert("Error al agregar usuario");
    }
  };

  const eliminarUsuario = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;
    try {
      const response = await fetch(`${API_URL}/auth/usuarios/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar el usuario");
      alert("Usuario eliminado con éxito");
      cargarUsuarios(); // Recargar la lista de usuarios
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      alert("Error al eliminar el usuario");
    }
  };

  return (
    <div className="container-informes">
      <h1>Panel de Administración</h1>

      <section>
        <h2>Modificar Parámetros del Administrador</h2>
        <div className="form-grid">
          <select
            name="serie"
            value={adminParams.serie}
            onChange={handleAdminParamsChange}
          >
            <option value="">Seleccione una serie</option>
            <option value="SERIE A">SERIE A</option>
            <option value="SERIE BS">SERIE BS</option>
            <option value="SERIE BM">SERIE BM</option>
            <option value="SERIE D">SERIE D</option>
            <option value="SERIE P">SERIE P</option>
          </select>

          <div className="file-upload-container">
            <input
              type="file"
              accept=".xlsm"
              onChange={handleFileChange}
              id="xlsm-upload"
              className="custom-file-input"
            />
            <label htmlFor="xlsm-upload" className="file-upload-label">
              Seleccionar Archivo .xlsm
            </label>
            {adminParams.version && (
              <div className="version-display">
                Versión detectada: {adminParams.version}
              </div>
            )}
          </div>

          <button onClick={subirArchivo}>Subir Archivo</button>
        </div>
      </section>

      <section>
        <h2>Agregar Usuario</h2>
        <form>
          <input
            name="establecimiento"
            placeholder="Establecimiento"
            onChange={handleNuevoUsuarioChange}
          />
          <input
            name="nombre"
            placeholder="Nombre"
            onChange={handleNuevoUsuarioChange}
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleNuevoUsuarioChange}
          />
          <input
            name="clave"
            placeholder="Clave"
            type="password"
            onChange={handleNuevoUsuarioChange}
          />
          <select
            name="rol"
            value={nuevoUsuario.rol}
            onChange={handleNuevoUsuarioChange}
          >
            <option value="usuario">Usuario</option>
            <option value="lector">Revisa informes REM</option>
            <option value="dashboard">Modifica Dashboard</option>
            <option value="administrador">Administrador</option>
          </select>
          <button onClick={agregarUsuario} type="button">
            Agregar Usuario
          </button>
        </form>
      </section>

      <section>
        <h2>Lista de Usuarios</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Establecimiento</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.establecimiento}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>
                  <button onClick={() => eliminarUsuario(usuario.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdministradorRem;




