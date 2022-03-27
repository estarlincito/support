import React from "react";
import data from '../data.json'
import Card from "./Card";

const cardJson = [];
for (let i = 0; i < data.length; i++) {
    const element = Card(data[i].subtitle,data[i].text,data[i].imgcard);
    cardJson.push(element) 
}

const Service = () =>{
    return(
        <div>
            <title>Servisios - Estarlincito</title>
            <div className='card__container card__container--2'>
                {cardJson}
            </div>
        </div>
    )
}

export default Service;