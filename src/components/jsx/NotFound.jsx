import React from "react";
import { Link } from "react-router-dom";
//img
const card_img = require.context("../img", true);

const NotFound = () => {
  return (
    <div className="error">
      <div></div>
      <div className="error__info">
        <h2 className="error__title">Lo sentimos…</h2>
        <p className="error__text">
          Esta página no existe.
          <br />
          Puedes regresar a la <Link to="/">página principal</Link> de
          Estarlincito.
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
