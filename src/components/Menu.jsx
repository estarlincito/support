import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/service">Servicios</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  );
};

export default Menu;
