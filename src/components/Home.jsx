import React, { useContext } from "react";
import Card from "./Card";
import { Context } from "../context/UserContext";

const Home = () => {
  const { data, HelmetData } = useContext(Context);

  const items = new Array();

  for (let i = 0; i < 6; i++) {
    items.push({
      id: data[i].id,
      subtitle: data[i].subtitle,
      description: data[i].description,
      img: data[i].img,
      url: data[i].url,
    });
  }

  return (
    <>
      <HelmetData title="Home" />

      <div className="card__container">
        <Card
          id={data[3].id}
          subtitle={data[3].subtitle}
          description={data[3].description}
          img={data[3].img}
          url={data[3].url}
        />
      </div>

      <div className="card__container card__container--2">
        {items.map((item) => (
          <Card
            key={item.url}
            id={item.id}
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

export default Home;
