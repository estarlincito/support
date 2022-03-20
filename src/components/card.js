import {
    Link
  } from "react-router-dom";

const card = (subtitle, text, img) => {
    return(
      <div className='card'>
        <article className="card__article">
            <figure className="card__figure">
              <img src={img}/>
            </figure>
  
            <figcaption className="card__figcaption">
                <h3 className='card__subtitle'>{subtitle}</h3>
                <p className='card__text'>{text}</p>
                <div className='card__Button'>
                  <a><Link to="/contact">Solicitar<i class="bi bi-box-arrow-up-right"></i></Link></a>
                </div>
            </figcaption>
        </article>
      </div>
    );
  }

export default card;