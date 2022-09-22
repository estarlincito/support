import { Link } from "react-router-dom";
import { FiShare2 } from "react-icons/fi";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
const card_img = require.context("../assets/img", true);

const Card = (props) => {
  const userContext = useContext(UserContext);
  const { selected_card, get_card, get_contact, set_footer } = userContext;

  const handle_getCard_set_footer = () => {
    get_card(props.id);
    set_footer(true);
  };

  const handle_getContact_set_footer = () => {
    get_contact(props.id);
    set_footer(false);
  };

  return (
    <article
      className={selected_card ? "card__article user_select" : "card__article"}
      key={props.url}
    >
      <i className="card__FiShare2" onClick={handle_getCard_set_footer}>
        <FiShare2 />
      </i>
      <Link to="/contact" onClick={handle_getContact_set_footer}>
        <figcaption className="card__figcaption">
          <h3 className="card__subtitle">{props.subtitle}</h3>
          <p className="card__text">{props.description}</p>
        </figcaption>

        <i className="card__apply_for">Solicitar</i>

        <figure className="card__figure">
          <Link to="/contact" onClick={handle_getContact_set_footer}>
            <img
              className="card__img"
              src={card_img(`./${props.img}.svg`)}
              alt=""
            />
          </Link>
        </figure>
      </Link>
    </article>
  );
};

export default Card;
