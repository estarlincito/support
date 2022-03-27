import React from "react";
import {
    Link
  } from "react-router-dom";

const Menu = () =>{
    return(
        
        <nav>
            <a><Link to="/">Inicio</Link></a>
            <a><Link to="/service">Servicios</Link></a>
            <a><Link to="/contact">Contacto</Link></a>
        </nav>

    )
}

export default Menu;