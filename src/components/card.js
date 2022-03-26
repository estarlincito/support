import {
    Link
  } from "react-router-dom";



const card = (subtitle, text, img) => {
    return(
        <article className="card__article">

            <figcaption className="card__figcaption"> 
              <div className="card__figcaption_text">
                <Link to="/contact#intro" className='card__subtitle'><h3>{subtitle}</h3></Link>
                <p className='card__text'>{text}</p>
                <div className='card__Button'>
                  <Link to="/contact#intro">Solicitar<i class="bi bi-box-arrow-up-right"></i></Link>
                </div>
              </div>
            </figcaption>

            <figure className="card__figure">
              <img className="card__img" src={img}/>
            </figure>
        </article>
    );
  }

export default card;