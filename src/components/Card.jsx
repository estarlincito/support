import {
    Link
  } from "react-router-dom";

const Card = (subtitle, text, img) => {
    return(
        <article className="card__article">
            <figcaption className="card__figcaption"> 
              <div className="card__figcaption_text">
                <Link to="/contact" className='card__subtitle'><h3>{subtitle}</h3></Link>
                <p className='card__text'>{text}</p>
                <div className='card__Button'>
                  <Link to="/contact">Solicitar<i class="bi bi-box-arrow-up-right"></i></Link>
                </div>
              </div>
            </figcaption>
            
            <figure className="card__figure">
              <Link to="/contact"><img className="card__img" src={img}/></Link>
            </figure>
        </article>
    );
  }

export default Card;