import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import Use_Reducer from "./Use_Reducer";
import { FiExternalLink } from "react-icons/fi";
const card_img = require.context("../img", true)

const Card = (props) => {
  const [useState, dispatch] = useReducer(Use_Reducer, "hide");
  return (
    <article className="card__article">
      <i className="bi bi-share" onClick={() => dispatch({ type: "hide" })}></i>
      <figcaption className="card__figcaption">
        <div className="card__figcaption_text">
          <Link to="/contact" className="card__subtitle">
            <h3>{props.subtitle}</h3>
          </Link>
          <p className="card__text">{props.descripction}</p>
          <div className="card__Button">
            <Link to="/contact">
              Solicitar<i className="FiExternalLink"><FiExternalLink/></i>
            </Link>
          </div>
        </div>
      </figcaption>

      <figure className="card__figure">
        <Link to="/contact">
          <img className="card__img" src={card_img(`./${props.img}.svg`)} alt="" />
        </Link>
      </figure>
    </article>
  );
};

export default Card;