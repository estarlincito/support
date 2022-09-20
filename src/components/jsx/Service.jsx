import Card from "./Card";
import { useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import HelmetData from "./HelmetData";

const Service = () => {
  const userContext = useContext(UserContext);
  const { data_card, get_data_json, get_card, set_footer } = userContext;

  useEffect(() => {
    get_data_json();
    get_card(null);
    set_footer(false);
  }, []);

  const data_length = Object.keys(data_card).length;

  return (
    <>
      <HelmetData title="Servicios" />
      <div className="card__container card__container--2">
        {data_length !== 0
          ? data_card.card.map((data) => (
              <Card
                key={data.url}
                id={data.id}
                subtitle={data.subtitle}
                description={data.description}
                img={data.img}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default Service;
