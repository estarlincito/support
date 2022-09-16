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

  const data_url = data_card.find((data) => data.card.url === url_id);

  return (
    <>
      {data_url == undefined ? (
        <NotFound />
      ) : (
        <HelmetData
          url={`https://estarlincito.tech/#/${data_url.card.url}`}
          title={data_url.card.subtitle}
          description={data_url.card.description}
          img={data_url.card.img+".svg"}
        />
      )}

      <div className="card_url card__container">
        {data_url == undefined ? (
          <NotFound />
        ) : (
          <Card
            id={data_url.card.id}
            subtitle={data_url.card.subtitle}
            description={data_url.card.description}
            img={data_url.card.img}
          />
        )}
      </div>
    </>
  );
};

export default CardUrl;
