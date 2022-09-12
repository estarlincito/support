import React from "react";
import { Link } from "react-router-dom";

//Get UserContext
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Menu = () => {
  //Get UserContext
  const userContext = useContext(UserContext);
  const { close_share } = userContext;

  return (
    <nav>
      <Link
        to="/"
        onClick={() => {
          close_share();
        }}
      >
        Inicio
      </Link>
      <Link
        to="/service"
        onClick={() => {
          close_share();
        }}
      >
        Servicios
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          close_share();
        }}
      >
        Contacto
      </Link>
    </nav>
  );
};

export default Menu;
