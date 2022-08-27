//este es el apartado de compartir, devo de terminarlo
import React, { useReducer } from "react";
import Use_Reducer from "./Use_Reducer";
import { Link } from "react-router-dom";

const Share = () => {
  const [useState, dispatch] = useReducer(Use_Reducer, "hide");

  return (
    <div className={useState}>
      <div className="Share">
        <div className="Share__header">
          <h2 className="Share__title">Compartir</h2>
          <i
            className="bi bi-x-square"
            onClick={() => dispatch({ type: "Share__container" })}
          ></i>
        </div>
        <div className="Share__contents">
          <img
            src="/img/undraw_page_not_found_re_e9o6__estarlincito.svg"
            alt=""
            className="Share__img"
          />
          <div>
            <h3 className="Share__subtiitle">soporte tecnico</h3>
            <p>Txtssoporte tecnico</p>
          </div>
        </div>

        <div className="Share__link">
          <input type="text" placeholder="url" className="Share__input" />
          <Link to="/" className="hare__input--bi">
            <i className="bi bi-clipboard"></i>Copiar link
          </Link>
          <Link to="/" className="hare__input--bi">
            <i className="bi bi-envelope"></i>Compartir via email
          </Link>
          <Link to="/" className="hare__input--bi">
            <i className="bi bi-whatsapp"></i>compartir via wa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Share;
