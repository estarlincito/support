import Card from "./Card";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Service = () => {
  //Get UserContext
  const userContext = useContext(UserContext);
  const { data_card, get_data_json, get_card, set_footer } = userContext;

  useEffect(() => {
    get_data_json();
    get_card(null);
    set_footer(false);
  }, []);

  return (
    <>
      <title>Servicios - Estarlincito</title>
      <div className="card__container card__container--2">
        {!data_card.length == 0
          ? data_card.map((data) => (
              <Card
                key={data.id}
                id={data.id}
                subtitle={data.subtitle}
                descripction={data.descripction}
                img={data.imgcard}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default Service;
