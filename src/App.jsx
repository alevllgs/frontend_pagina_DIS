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

// Importar las rutas centralizadas
import { routes } from "./config/routes";

const App = () => {
  return (
    <div>
      {/* Navbar siempre visible */}
      <Navbar />
      {/* Definición de rutas */}
      <Routes>
        {/* Ruta para Home */}
        <Route path={routes.home} element={<Home />} />
        
        {/* Ruta protegida para "Quiénes Somos" */}
        <Route
          path={routes.quienesSomos}
          element={
            <ProtectedRoute>
              <QuienesSomos />
            </ProtectedRoute>
          }
        />
        
        {/* Ruta para Documentos */}
        <Route path={routes.documentos} element={<Documentos />} />
        
        {/* Rutas para botones principales */}
        <Route path={routes.ges} element={<Ges />} />
        <Route path={routes.rem} element={<Rem />} />
        
        {/* Rutas para Registro con redirección específica */}
        <Route path={routes.remLogin} element={<Registro redirectTo={routes.subirRem} />} />
        <Route path={routes.gesLogin} element={<Registro redirectTo={routes.gesProtegido} />} />
        
        {/* Rutas protegidas */}
        <Route
          path={routes.subirRem}
          element={
            <ProtectedRoute>
              <SubirRem />
            </ProtectedRoute>
          }
        />
        <Route
          path={routes.gesProtegido}
          element={
            <ProtectedRoute>
              <GesProtegido />
            </ProtectedRoute>
          }
        />
        
        {/* Nueva ruta para el Validador */}
        <Route path={routes.validador} element={<Validador />} />
      </Routes>
    </div>
  );
};

export default App;
