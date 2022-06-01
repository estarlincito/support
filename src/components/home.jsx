import React, { Fragment } from "react";
import data from '../data.json'
import Card from "./Card";

const Home = () =>{

    const items = [];
    for (let i = 6; i < data.length; i++) {
        items.push(

            <Card
                subtitle = {data[i].subtitle}
                descripction = {data[i].descripction}
                img = {data[i].imgcard}
            />
        );
    }

    return(
        <div>
            <title>Estarlincito</title>
            <div className="card__container">
                <Card 
                    subtitle = {data[2].subtitle}
                    descripction = {data[2].descripction}
                    img = {data[2].imgcard}
                    />
            </div>
            

            <div className='card__container card__container--2'>

                {items.map((items,index)=>{
                    return <Fragment key={index}>{items}</Fragment>
                })}

            </div>
        </div>
    )
}

export default Home;