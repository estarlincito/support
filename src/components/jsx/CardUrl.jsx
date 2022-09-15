import { useParams } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useEffect } from "react";
import Card from "./Card";

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

  return (
    <div className="card_url card__container">
      {!data_card.length == 0 ? (
        <Card
          id={data_card[url_id].id}
          subtitle={data_card[url_id].subtitle}
          descripction={data_card[url_id].descripction}
          img={data_card[url_id].imgcard}
        />
      ) : null}
    </div>
  );
};

export default CardUrl;
