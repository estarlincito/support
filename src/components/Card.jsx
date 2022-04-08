import React, { useState } from 'react'
import {
    Link
  } from "react-router-dom";


const  Card= (props) => {

  let [css__class, css__classV] = useState("hide");
  const Show = () => {
      css__classV(css__class = "Share__container");
      }
      
  return ( 
        <article className="card__article">
        {/* <i className="bi bi-share" onClick={Show}></i>  */}
        <figcaption className="card__figcaption">
          <div className="card__figcaption_text">
            <Link to="/contact" className='card__subtitle'><h3>{props.subtitle}</h3></Link>
            <p className='card__text'>{props.descripction}</p>
            <div className='card__Button'>
              <Link to="/contact">Solicitar<i className="bi bi-box-arrow-up-right"></i></Link>
            </div>
          </div>
        </figcaption>
        
        <figure className="card__figure">
          <Link to="/contact"><img className="card__img" src={props.img}/></Link>
        </figure>
      </article> 
   );
}
 
export default Card;