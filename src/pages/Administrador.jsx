import React, { useState, useEffect } from "react";
import "../styles/Administrador.css";

const API_URL = "http://localhost:5000"; // URL base del backend

const Administrador = () => {
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
    letra: "",
  });

  const [parametros, setParametros] = useState([]); // Para almacenar los parámetros obtenidos

  // Cargar usuarios y parámetros al montar el componente
  useEffect(() => {
    cargarUsuarios();
    cargarParametros();
  }, []);

  // Obtener lista de usuarios
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

  // Obtener lista de parámetros
  const cargarParametros = async () => {
    try {
      const response = await fetch(`${API_URL}/admin/params`);
      if (!response.ok) throw new Error("Error al cargar parámetros");
      const data = await response.json();
      setParametros(data);
    } catch (error) {
      console.error(error);
      alert("Error al cargar parámetros");
    }
  };

  // Manejar cambios en el formulario de nuevo usuario
  const handleNuevoUsuarioChange = (e) => {
    setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
  };

  // Manejar cambios en el formulario de parámetros
  const handleAdminParamsChange = (e) => {
    setAdminParams({ ...adminParams, [e.target.name]: e.target.value });
  };

  // Agregar un nuevo usuario
  const agregarUsuario = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoUsuario),
        
      });
      console.log("Datos enviados:", nuevoUsuario);
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

  return (
    <div className="container">
      <h1>Panel de Administración</h1>

      {/* Modificar Parámetros de administrador_rem */}
      <section>
        <h2>Modificar Parámetros del Administrador</h2>
        <div className="form-grid">
          <input
            name="serie"
            placeholder="Serie"
            onChange={handleAdminParamsChange}
          />
          <input
            name="version"
            placeholder="Versión"
            onChange={handleAdminParamsChange}
          />
          <input
            name="letra"
            placeholder="Letra"
            onChange={handleAdminParamsChange}
          />
          <button>Modificar Parámetros</button>
        </div>

        <h3>Lista de Parámetros</h3>
        <ul>
          {parametros.map((param, index) => (
            <li key={index}>
              {param.serie} - {param.version} - {param.letra}
            </li>
          ))}
        </ul>
      </section>

      {/* Agregar Usuario */}
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
            <option value="administrador">Administrador</option>
          </select>
          <button onClick={agregarUsuario} type="button">
            Agregar Usuario
          </button>
        </form>
      </section>

      {/* Listado de Usuarios */}
      <section>
        <h2>Lista de Usuarios</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Establecimiento</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Fecha Creación</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.establecimiento}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{new Date(usuario.fecha_creacion).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Administrador;
