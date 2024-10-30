import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import QuienesSomos from "./pages/QuienesSomos";
import Home from "./pages/Home";
import Documentos from "./pages/Documentos";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quienes-somos"
          element={
            <ProtectedRoute>
              <QuienesSomos />
            </ProtectedRoute>
          }
        />
        <Route path="/documentos" element={<Documentos />} />
      </Routes>
    </div>
  );
};

export default App;
