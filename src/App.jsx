import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import QuienesSomos from "./pages/QuienesSomos";

import Home from "./pages/Home";
import Documentos from "./pages/Documentos";
import Ges from "./pages/Ges"; // Página GES
import Rem from "./pages/Rem"; // Página REM
import GestionClinicaFinanciera from "./pages/GestionClinicaFinanciera";
import Inmunizacion from "./pages/Inmunizacion"; // Página GES
import VisorTerritorial from "./pages/VisorTerritorial"; // Página GES
import LinksInteres from "./pages/LinksInteres";

import Registro from "./components/Registro"; // Formulario de login general
import Validador from "./pages/Validador"; // Página del validador
import ProtectedRoute from "./components/ProtectedRoute";

import SubirRem from "./pages/RemProtegido"; // Página para subir archivos REM
import GesProtegido from "./pages/GesProtegido"; // Página protegida GES
import AdminLogin from "./pages/AdminLogin"; // Nueva página para login administrativo
import Administrador from "./pages/Administrador"; // Página protegida para administradores


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
        
        {/* Ruta para "Quiénes Somos" */}
        <Route path={routes.quienesSomos} element={<QuienesSomos />} />
        <Route path={routes.documentos} element={<Documentos />} />
        <Route path={routes.linksInteres} element={<LinksInteres />} />
        
        {/* Rutas para botones principales */}
        <Route path={routes.ges} element={<Ges />} />
        <Route path={routes.rem} element={<Rem />} />
        <Route path={routes.gestionClinicaFinanciera} element={<GestionClinicaFinanciera />} />
        <Route path={routes.visorTerritorial} element={<VisorTerritorial />} />
        <Route path={routes.inmunizacion} element={<Inmunizacion />} />
        
        {/* Rutas para Registro con redirección específica */}
        <Route path={routes.remLogin} element={<Registro redirectTo={routes.subirRem} />} />
        <Route path={routes.gesLogin} element={<Registro redirectTo={routes.gesProtegido} />} />
        
        {/* Nueva ruta para AdminLogin */}
        <Route path={routes.adminLogin} element={<AdminLogin />} />
        
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
        
        {/* Nueva ruta para la página de Administrador */}
        <Route
          path={routes.administrador}
          element={
            <ProtectedRoute adminOnly={true}>
              <Administrador />
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
