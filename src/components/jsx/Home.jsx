import React, { Fragment } from "react";
import Card from "./Card";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

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
          descripction={data_card[i].card.descripction}
          img={data_card[i].card.img}
        />
      );
    }
  }

  return (
    <>
      <title>Estarlincito</title>
      <div className="card__container">
        {data_card.length != 0 ? (
          <Card
            id={data_card[3].card.id}
            subtitle={data_card[3].card.subtitle}
            descripction={data_card[3].card.descripction}
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
