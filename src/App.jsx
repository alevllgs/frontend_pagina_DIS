import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import QuienesSomos from "./pages/QuienesSomos";
import Home from "./pages/Home";
import Documentos from "./pages/Documentos";
import Ges from "./pages/Ges"; // Página GES
import Rem from "./pages/Rem"; // Página REM
import Registro from "./components/Registro"; // Actualizado para que sea reutilizable
import Validador from "./pages/Validador"; // Página del validador
import ProtectedRoute from "./components/ProtectedRoute";
import GestionClinicaFinanciera from "./pages/GestionClinicaFinanciera";
import SubirRem from "./pages/RemProtegido"; // Página para subir archivos REM
import GesProtegido from "./pages/GesProtegido"; // Página protegida GES

const App = () => {
  return (
    <div>
      {/* Navbar siempre visible */}
      <Navbar />
      {/* Definición de rutas */}
      <Routes>
        {/* Ruta para Home */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta protegida para "Quiénes Somos" */}
        <Route
          path="/quienes-somos"
          element={
            <ProtectedRoute>
              <QuienesSomos />
            </ProtectedRoute>
          }
        />
        
        {/* Ruta para Documentos */}
        <Route path="/documentos" element={<Documentos />} />
        
        {/* Rutas para botones principales */}
        <Route path="/ges" element={<Ges />} />
        <Route path="/rem" element={<Rem />} />
        
        {/* Rutas para Registro con redirección específica */}
        <Route path="/rem_login" element={<Registro redirectTo="/subir_rem" />} />
        <Route path="/ges_login" element={<Registro redirectTo="/ges_protegido" />} />
        
        {/* Rutas protegidas */}
        <Route
          path="/subir_rem"
          element={
            <ProtectedRoute>
              <SubirRem />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ges_protegido"
          element={
            <ProtectedRoute>
              <GesProtegido />
            </ProtectedRoute>
          }
        />
        
        {/* Nueva ruta para el Validador */}
        <Route path="/validador" element={<Validador />} />
      </Routes>
    </div>
  );
};

export default App;
