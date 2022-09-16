import { FiCopy, FiX } from "react-icons/fi";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const card_img = require.context("../assets/img", true);

const Share = () => {
  const userContext = useContext(UserContext);
  const { selected_card, get_card, set_footer, curren_url_value } = userContext;

  const handleInactive = () => {
    get_card(null);
    set_footer(curren_url_value === window.location.href ? true : false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://estarlincito.tech/#/${selected_card.url}`
    );
  };

  return (
    <>
      {selected_card ? (
        <div key={selected_card.id} className="Share__container">
          <div className="Share">
            <div className="Share__header">
              <h2 className="Share__title">Compartir</h2>

              <i className="FiX" onClick={handleInactive}>
                <FiX />
              </i>
            </div>
            <div className="Share__line"></div>
            <div className="Share__contents">
              <img
                src={card_img(`./${selected_card.img}.svg`)}
                alt=""
                className="Share__img"
              />
              <div>
                <h3 className="Share__subtiitle">{selected_card.subtitle}</h3>
                <p className="Share__text">{selected_card.descripction}</p>
              </div>
            </div>

            <div className="Share__link">
              <i className="Copiar link" onClick={copyToClipboard}>
                <FiCopy /> Copiar link
              </i>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Share;
