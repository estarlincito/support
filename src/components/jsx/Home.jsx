import React, { Fragment } from "react";
import Card from "./Card";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import HelmetData from "./HelmetData";

const Home = () => {
  const userContext = useContext(UserContext);
  const { data_card, get_data_json, get_card, set_footer } = userContext;

  useEffect(() => {
    get_data_json();
    get_card(null);
    set_footer(false);
  }, []);

  const items = [];

  if (data_card.length != 0) {
    for (let i = 9; i < data_card.length; i++) {
      items.push(
        <Card
          id={data_card[i].card.id}
          subtitle={data_card[i].card.subtitle}
          description={data_card[i].card.description}
          img={data_card[i].card.img}
        />
      );
    }
  }

  return (
    <>
      <HelmetData
        url="https://estarlincito.tech"
        title="Home"
        description="¡Soporte técnico, diseño web y mucho más!"
        // img="favicon-96x96.ico"
      />
      <div className="card__container">
        {data_card.length != 0 ? (
          <Card
            id={data_card[3].card.id}
            subtitle={data_card[3].card.subtitle}
            description={data_card[3].card.description}
            img={data_card[3].card.img}
          />
        ) : null}
      </div>

      <div className="card__container card__container--2">
        {items.map((items, index) => {
          return <Fragment key={index}>{items}</Fragment>;
        })}
      </div>
    </>
  );
};

export default Home;
