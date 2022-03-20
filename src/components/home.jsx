import React from "react";
import data from '../data.json'
import card from "./card";

const cardJson = [];
for (let i = 0; i < 2; i++) {
    const element = card(data[i].subtitle,data[i].text,data[i].imgcard);
    cardJson.push(element) 
}

const home = () =>{
    return(
        <div>
            <title>Inicio | Estarlincito</title>
            {card(data[2].subtitle,data[2].text,data[2].imgcard)}

            <div className='card__article--2'>
                {cardJson}
            </div>
        </div>
    )
}

export default home;