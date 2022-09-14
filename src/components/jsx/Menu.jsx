import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Menu = () => {
  //Get UserContext
  const userContext = useContext(UserContext);
  const { close_share, setActive, } = userContext;

  const handle_closeShare_setActive = () => {
    close_share();
    setActive(false);
    //////////////////////////////////off_get_contact(null);
  };

  return (
    <nav>
      <Link to="/" replace onClick={handle_closeShare_setActive}>
        Inicio
      </Link>
      <Link to="/service" replace onClick={handle_closeShare_setActive}>
        Servicios
      </Link>
      <Link to="/contact" replace onClick={handle_closeShare_setActive}>
        Contacto
      </Link>
    </nav>
  );
};

export default Menu;
