import { Link } from "react-router-dom";
import { FiExternalLink, FiShare2 } from "react-icons/fi";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
const card_img = require.context("../img", true);

const Card = (props) => {
  const userContext = useContext(UserContext);
  const { get_card, get_contact, setActive } = userContext;

  const handle_getCard_setActive = () => {
    get_card(props.id);
    setActive(true);
  };

  const handle_getContact_setActive = () => {
    get_contact(props.id);
    setActive(false);
  };

  return (
    <article className="card__article">
      <i className="FiShare2" onClick={handle_getCard_setActive}>
        <FiShare2 />
      </i>

      <figcaption className="card__figcaption">
        <div className="card__figcaption_text">
          <Link
            to="/contact"
            className="card__subtitle"
            onClick={handle_getContact_setActive}
          >
            <h3>{props.subtitle}</h3>
          </Link>
          <p className="card__text">{props.descripction}</p>
          <div className="card__Button">
            <Link to="/contact" onClick={handle_getContact_setActive}>
              Solicitar
              <i className="FiExternalLink">
                <FiExternalLink />
              </i>
            </Link>
          </div>
        </div>
      </figcaption>

      <figure className="card__figure">
        <Link to="/contact" onClick={handle_getContact_setActive}>
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
