import {
    Link
  } from "react-router-dom";

const card = (subtitle, text, img) => {
    return(
        <article className="card__article">
            <figure className="card__figure">
              <img className="card__img" src={img}/>
            </figure>
  
            <figcaption className="card__figcaption">
                
                <a><Link to="/contact" className='card__subtitle'><h3>{subtitle}</h3></Link></a>
                <p className='card__text'>{text}</p>
                <div className='card__Button'>
                  <a><Link to="/contact">Solicitar<i class="bi bi-box-arrow-up-right"></i></Link></a>
                </div>
            </figcaption>
        </article>
    );
  }

export default card;