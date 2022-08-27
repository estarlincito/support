import React, { Fragment } from "react";
import data from "../data.json";
import Card from "./Card";

const Service = () => {
  const items = [];
  for (let i = 1; i < data.length; i++) {
    items.push(
      <Card
        subtitle={data[i].subtitle}
        descripction={data[i].descripction}
        img={data[i].imgcard}
      />
    );
  }

  return (
    <div>
      <title>Servicios - Estarlincito</title>
      <div className="card__container card__container--2">
        {items.map((items, index) => {
          return <Fragment key={index}>{items}</Fragment>;
        })}
      </div>
    </div>
  );
};

export default Service;
