import { useParams } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useEffect } from "react";
import Card from "./Card";
import NotFound from "./NotFound";
import HelmetData from "./HelmetData";

const CardUrl = () => {
  const { url_id } = useParams();
  const { data_card, get_data_json, set_footer, curren_url, get_card } =
    useContext(UserContext);

  useEffect(() => {
    get_data_json();
    set_footer(true);
    curren_url(window.location.href);
    get_card(null);
  }, []);

  const data_length = Object.keys(data_card).length;

  const data_url = {
    card: "",
  };

  if (data_length !== 0) {
    data_url.card = data_card.card.find((data) => data.url === url_id);
  } else {
    return null;
  }

  return (
    <div className="card_url card__container">
      {data_url.card == undefined ? (
        <NotFound />
      ) : (
        <>
          <HelmetData
            title={data_url.card.subtitle}
            // url={`https://estarlincito.tech/#/${data_url.card.url}`}
            // description={data_url.card.description}
            // img={data_url.card.img + ".svg"}
          />
          <Card
            id={data_url.card.id}
            subtitle={data_url.card.subtitle}
            description={data_url.card.description}
            img={data_url.card.img}
          />
        </>
      )}
    </div>
  );
};

export default CardUrl;
