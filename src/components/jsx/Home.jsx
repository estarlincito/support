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
  const data_length = Object.keys(data_card).length;

  if (data_length !== 0) {
    for (let i = 10; i < data_card.card.length; i++) {
      items.push(
        <Card
          id={data_card.card[i].id}
          subtitle={data_card.card[i].subtitle}
          description={data_card.card[i].description}
          img={data_card.card[i].img}
          url={data_card.card[i].url}
        />
      );
    }
  }

  return (
    <>
      <HelmetData title="Home" />
      <div className="card__container">
        {data_length !== 0 ? (
          <Card
            id={data_card.card[3].id}
            subtitle={data_card.card[3].subtitle}
            description={data_card.card[3].description}
            img={data_card.card[3].img}
            url={data_card.card[3].url}
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
