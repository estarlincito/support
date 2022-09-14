import React, { Fragment } from "react";
import Card from "./Card";

//Get UserContext
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Home = () => {
  //Get UserContext
  const userContext = useContext(UserContext);
  const { data_card, getDataJson } = userContext;

  useEffect(() => {
    getDataJson();
  }, []);

  const items = [];

  if (!data_card.length == 0) {
    for (let i = 9; i < data_card.length; i++) {
      items.push(
        <Card
          id={data_card[i].id}
          subtitle={data_card[i].subtitle}
          descripction={data_card[i].descripction}
          img={data_card[i].imgcard}
        />
      );
    }
  }

  return (
    <>
      <title>Estarlincito</title>
      <div className="card__container">

        {!data_card.length == 0 ? (
          <Card
            id={data_card[0].id}
            subtitle={data_card[0].subtitle}
            descripction={data_card[0].descripction}
            img={data_card[0].imgcard}
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
