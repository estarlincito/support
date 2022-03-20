import React from "react";
import cardJson from '../data.json'
import card from "./card";

const home = () =>{
    return(
        <div>
            <title>Inicio | Estarlincito</title>
            {card(cardJson[0].subtitle,cardJson[0].text,cardJson[0].imgcard)}

            <div className='card__article--2'>
                {card(cardJson[1].subtitle,cardJson[1].text,cardJson[1].imgcard)}
                {card(cardJson[2].subtitle,cardJson[2].text,cardJson[2].imgcard)}
            </div>
        </div>
    )
}

export default home;