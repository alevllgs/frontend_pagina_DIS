import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import QuienesSomos from "./pages/QuienesSomos";
import Home from "./pages/Home";
import Documentos from "./pages/Documentos";
import Ges from "./pages/Ges"; // Página GES
import Rem from "./pages/Rem"; // Página REM
import Registro from "./pages/Registro";
import Validador from "./pages/Validador"; // Página del validador
import ProtectedRoute from "./components/ProtectedRoute";
import GestionClinicaFinanciera from "./pages/GestionClinicaFinanciera";

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

         {/* Ruta para REM */}
         <Route path="/rem" element={<Rem />} />
         <Route path="/registro" element={<Registro />} />
        
        {/* Nueva ruta para el Validador */}
        <Route path="/validador" element={<Validador />} />
      </Routes>
    </div>
  );
};

export default App;
