import { Link } from "react-router-dom";
import { FiShare2 } from "react-icons/fi";
import { useContext } from "react";
import { Context } from "../context/UserContext";

const Card = (item) => {
  const { img_path, getCard, getSubtile } = useContext(Context);

  //add "img path" to item data
  const item_update = {
    subtitle: item.subtitle,
    description: item.description,
    img: img_path[item.img],
    url: item.url,
  };

  const handleShare = () => {
    getCard(item_update);
  };

  const handleSubtitle = () => {
    getSubtile(item_update.subtitle);
  };

  return (
    <article className="card__article">
      <i className="card__FiShare2" onClick={handleShare}>
        <FiShare2 />
      </i>

      <Link to="/contact" onClick={handleSubtitle}>
        <figcaption className="card__figcaption">
          <h3 className="card__subtitle">{item_update.subtitle}</h3>
          <p className="card__text">{item_update.description}</p>
        </figcaption>

        <i className="card__apply_for">Solicitar</i>

        <figure className="card__figure">
          <img
            className="card__img"
            src={item_update.img}
            alt={`Imagen of ${item.img}`}
          />
        </figure>
      </Link>
    </article>
  );
};

export default Card;
