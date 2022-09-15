import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Menu = () => {
  //Get UserContext
  const userContext = useContext(UserContext);
  const { get_card, set_footer, get_contact } = userContext;

  const handleInactive = () => {
    get_card(null);
    set_footer(false);
    get_contact(null);
  };

  return (
    <nav>
      <Link to="/" replace onClick={handleInactive}>
        Inicio
      </Link>
      <Link to="/service" replace onClick={handleInactive}>
        Servicios
      </Link>
      <Link to="/contact" replace onClick={handleInactive}>
        Contacto
      </Link>
    </nav>
  );
};

export default Menu;
