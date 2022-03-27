import React from "react";
import data from '../data.json'
import Card from "./Card";

const cardJson = [];
for (let i = 0; i < 2; i++) {
    const element = Card(data[i].subtitle,data[i].text,data[i].imgcard);
    cardJson.push(element) 
}

const Home = () =>{
    return(
        <div>
            <title>Estarlincito</title>
            <div className="card__container">
                {Card(data[2].subtitle,data[2].text,data[2].imgcard)}
            </div>
            

            <div className='card__container card__container--2'>
                {cardJson}
            </div>
        </div>
    )
}

export default Home;