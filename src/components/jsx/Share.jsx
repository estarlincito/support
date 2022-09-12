import { FiCopy, FiX} from "react-icons/fi";

//Get UserContext
import { useContext } from "react";
import UserContext from "../../context/UserContext";

//img
const card_img = require.context("../img", true);

const Share = () => {
  //Get UserContext
  const userContext = useContext(UserContext);
  const { selected_card, close_share } = userContext;

  return (
    <>
      {selected_card ? (
        <div key={selected_card.id} className="Share__container">
          <div className="Share">
            <div className="Share__header">
              <h2 className="Share__title">Compartir</h2>

              <i className="FiX" onClick={()=>{
                close_share();
              }}><FiX/></i>
            </div>
            <div className="Share__contents">
              <img
                src={card_img(`./${selected_card.imgcard}.svg`)}
                alt=""
                className="Share__img"
              />
              <div>
                <h3 className="Share__subtiitle">{selected_card.subtitle}</h3>
                <p className="Share__text">{selected_card.descripction}</p>
              </div>
            </div>

            <div className="Share__link">
              {/* <input type="text" placeholder="url" className="Share__input" /> */}

              {/* Ojo aqui con esas class */}
                <i className="Copiar link"><FiCopy/> Copiar link</i>
              
              {/* <Link to="/" className="hare__input--bi">
                <i className="bi bi-envelope"></i>Compartir via email
              </Link>
              <Link to="/" className="hare__input--bi">
                <i className="bi bi-whatsapp"></i>compartir via wa
              </Link> */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Share;
