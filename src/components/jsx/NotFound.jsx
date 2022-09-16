import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
const card_img = require.context("../assets/img", true);

const NotFound = () => {
  
  const userContext = useContext(UserContext);
  const { get_card, set_footer } = userContext;

  useEffect(() => {
    get_card(null);
    set_footer(false);
  }, []);

  return (
    <div className="error">
      <div></div>
      <div className="error__info">
        <h2 className="error__title">Lo sentimos…</h2>
        <p className="error__text">
          Esta página no existe.
          <br />
          Puedes regresar a la{" "}
          <Link to="/" replace>
            página principal
          </Link>{" "}
          de Estarlincito.
        </p>
        <img
          className="error__img"
          src={card_img(`./undraw_page_not_found_re_e9o6__estarlincito.svg`)}
          alt=""
        />
      </div>
      <div></div>
    </div>
  );
};

export default NotFound;
