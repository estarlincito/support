import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/UserContext";

const Menu = () => {
  const { getCard, getSubtile } = useContext(Context);
  
  const handleInactive = () => {
    getCard("");
    getSubtile("");
  };

  return (
    <>
      <nav className="menu">
        <Link to="/" onClick={handleInactive}>
          Inicio
        </Link>
        <Link to="/service" onClick={handleInactive}>
          Servicios
        </Link>
        <Link to="/contact" onClick={handleInactive}>
          Contacto
        </Link>
      </nav>

      <div className="antiMenu"></div>
    </>
  );
};

export default Menu;
