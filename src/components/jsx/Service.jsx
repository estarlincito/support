import Card from "./Card";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Service = () => {
  //Get UserContext
  const userContext = useContext(UserContext);
  const { data_card, getDataJson } = userContext;

  useEffect(() => {
    if (data_card.length == 0) {
      getDataJson();
    } else {
      return null;
    }
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
