import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import QuienesSomos from "./pages/QuienesSomos";
import Home from "./pages/Home";
import Documentos from "./pages/Documentos";
import Ges from "./pages/Ges"; // Importa el componente de la página GES
import ProtectedRoute from "./components/ProtectedRoute";

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
        
        {/* Nueva ruta para GES */}
        <Route path="/ges" element={<Ges />} />
      </Routes>
    </div>
  );
};

export default App;

