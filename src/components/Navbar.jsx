import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/quienes-somos">Quiénes Somos</NavLink> |{" "}
      <NavLink to="/documentos">Documentos</NavLink>
    </nav>
  );
};

export default Navbar;
