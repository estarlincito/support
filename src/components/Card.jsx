import React, { useReducer } from "react";
import Use_Reducer from "./Use_Reducer";
import { Link } from "react-router-dom";

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
              Solicitar<i className="bi bi-box-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </figcaption>

      <figure className="card__figure">
        <Link to="/contact">
          <img className="card__img" src={props.img} />
        </Link>
      </figure>
    </article>
  );
};

export default Card;
