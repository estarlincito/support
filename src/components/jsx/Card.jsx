import { Link } from "react-router-dom";
import { FiExternalLink, FiShare2 } from "react-icons/fi";

//Get UserContext
import { useContext } from "react";
import UserContext from "../../context/UserContext";

// img
const card_img = require.context("../img", true);

const Card = (props) => {
  //Get UserContext
  const userContext = useContext(UserContext);
  const { get_card, get_contact } = userContext;

  return (
    <article className="card__article">
      <i className="FiShare2" onClick={() => get_card(props.id)}>
        <FiShare2 />
      </i>

      <figcaption className="card__figcaption">
        <div className="card__figcaption_text">
          <Link
            to="/contact"
            className="card__subtitle"
            onClick={() => get_contact(props.id)}
          >
            <h3>{props.subtitle}</h3>
          </Link>
          <p className="card__text">{props.descripction}</p>
          <div className="card__Button">
            <Link to="/contact" onClick={() => get_contact(props.id)}>
              Solicitar
              <i className="FiExternalLink">
                <FiExternalLink />
              </i>
            </Link>
          </div>
        </div>
      </figcaption>

      <figure className="card__figure">
        <Link to="/contact" onClick={() => get_contact(props.id)}>
          <img
            className="card__img"
            src={card_img(`./${props.img}.svg`)}
            alt=""
          />
        </Link>
      </figure>
    </article>
  );
};

export default Card;
