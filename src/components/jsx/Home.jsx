import React, { Fragment } from "react";
import data from "../data.json";
import Card from "./Card";

const Home = () => {
  const items = [];

  for (let i = 10; i < data.length; i++) {
    items.push(
      <Card
        subtitle={data[i].subtitle}
        descripction={data[i].descripction}
        img={data[i].imgcard}
      />
    );
  }

  return (
    <>
      <title>Estarlincito</title>
      <div className="card__container">
        <Card
          subtitle={data[1].subtitle}
          descripction={data[1].descripction}
          img={data[1].imgcard}
        />
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
