import Card from "./Card";
import { useContext } from "react";
import { Context } from "../context/UserContext";

const Service = () => {
  const { data, HelmetData } = useContext(Context);

  return (
    <>
      <HelmetData title="Servicios" />
      <div className="card__container card__container--2">
        {data.map((item) => (
          <Card
            key={item.url}
            subtitle={item.subtitle}
            description={item.description}
            img={item.img}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
};

export default Service;
