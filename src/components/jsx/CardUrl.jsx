import { useParams } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useEffect } from "react";
import Card from "./Card";
import NotFound from "./NotFound";

const CardUrl = () => {
  const { url_id } = useParams("");
  const {
    data_card,
    get_data_json,
    set_footer,
    curren_url,
    get_card,
  } = useContext(UserContext);

  useEffect(() => {
    get_data_json();
    set_footer(true);
    curren_url(window.location.href);
    get_card(null);
  }, []);

  const data_url = data_card.find((data) => data.card.url === url_id);

  return (
    <div className="card_url card__container">
      {data_url == undefined ? (
        <NotFound />
      ) : (
        <Card
          id={data_url.card.id}
          subtitle={data_url.card.subtitle}
          descripction={data_url.card.descripction}
          img={data_url.card.img}
        />
      )}
    </div>
  );
};

export default CardUrl;
