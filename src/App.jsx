import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import QuienesSomos from "./pages/QuienesSomos";

import Home from "./pages/Home";
import Documentos from "./pages/Documentos";
import Ges from "./pages/Ges"; // Página GES
import Rem from "./pages/Rem"; // Página REM
import ActividadesAps from "./pages/ActividadesAps";
import ProduccionHospitalaria from "./pages/ProduccionHospitalaria";
import Urgencia from "./pages/Urgencia";
import ListaEspera from "./pages/ListaEspera"; // Página REM
import Comges from "./pages/Comges";
import GestionClinicaFinanciera from "./pages/GestionClinicaFinanciera";
import Inmunizacion from "./pages/Inmunizacion"; // Página GES
import EstadisticasVitales from "./pages/EstadisticasVitales"; // Página GES
import VisorTerritorial from "./pages/VisorTerritorial"; // Página GES
import ControlGestion from "./pages/ControlGestion"; // Página GESTION
import LinksInteres from "./pages/LinksInteres";

import Registro from "./components/Registro"; // Formulario de login general
import Validador from "./pages/Validador"; // Página del validador
import ProtectedRoute from "./components/ProtectedRoute";

import SubirRem from "./pages/RemProtegido"; // Página para subir archivos REM
import GesProtegido from "./pages/GesProtegido"; // Página protegida GES
import AdminLogin from "./pages/AdminLogin"; // Nueva página para login administrativo
import Administrador from "./pages/Administrador"; // Página protegida para administradores
import AdministradorRem from "./pages/AdministradorRem"; // Página protegida para administradores
import AdministradorInformesRem from "./pages/AdministradorInformesRem"; // Página protegida para administradores
import AdministradorDashboard from "./pages/AdministradorDashboard"; // Página protegida para administradores

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
        <Route path={routes.listaEspera} element={<ListaEspera />} />
        <Route path={routes.actividadesAps} element={<ActividadesAps />} />
        <Route
          path={routes.produccionHospitalaria}
          element={<ProduccionHospitalaria />}
        />
        <Route path={routes.urgencia} element={<Urgencia />} />
        <Route path={routes.comges} element={<Comges />} />
        <Route
          path={routes.gestionClinicaFinanciera}
          element={<GestionClinicaFinanciera />}
        />
        <Route path={routes.controlGestion} element={<ControlGestion />} />
        <Route path={routes.visorTerritorial} element={<VisorTerritorial />} />
        <Route path={routes.inmunizacion} element={<Inmunizacion />} />
        <Route
          path={routes.estadisticasVitales}
          element={<EstadisticasVitales />}
        />

        {/* Rutas para Registro con redirección específica */}
        <Route
          path={routes.remLogin}
          element={<Registro redirectTo={routes.subirRem} />}
        />
        <Route
          path={routes.gesLogin}
          element={<Registro redirectTo={routes.gesProtegido} />}
        />

        {/* Nueva ruta para AdminLogin */}
        <Route path={routes.adminLogin} element={<AdminLogin />} />

        {/* Rutas protegidas con roles específicos */}
        <Route
          path={routes.subirRem}
          element={
            <ProtectedRoute
              allowedRoles={["administrador", "dashboard", "usuario"]}
            >
              <SubirRem />
            </ProtectedRoute>
          }
        />
        <Route
          path={routes.gesProtegido}
          element={
            <ProtectedRoute
              allowedRoles={["administrador", "dashboard", "usuario"]}
            >
              <GesProtegido />
            </ProtectedRoute>
          }
        />

        {/* Rutas protegidas de administración */}
        <Route
          path={routes.administrador}
          element={
            <ProtectedRoute allowedRoles={["administrador", "dashboard", "lector"]}>
              <Administrador />
            </ProtectedRoute>
          }
        />
        <Route
          path={routes.administradorRem}
          element={
            <ProtectedRoute allowedRoles={["administrador"]}>
              <AdministradorRem />
            </ProtectedRoute>
          }
        />
           <Route
          path={routes.administradorInformesRem}
          element={
            <ProtectedRoute allowedRoles={["administrador", "dashboard", "lector"]}>
              <AdministradorInformesRem />
            </ProtectedRoute>
          }
        />
        <Route
          path={routes.administradorDashboard}
          element={
            <ProtectedRoute allowedRoles={["administrador", "dashboard"]}>
              <AdministradorDashboard />
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
