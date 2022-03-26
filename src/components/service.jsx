import React from "react";
import data from '../data.json'
import card from "./card";

const cardJson = [];
for (let i = 0; i < data.length; i++) {
    const element = card(data[i].subtitle,data[i].text,data[i].imgcard);
    cardJson.push(element) 
}


const service = () =>{
    return(
        <div>
            <title>Servisios - Estarlincito</title>
            <div className='card__article--2'>
                {cardJson}
            </div>
        </div>
    )
}

export default service;