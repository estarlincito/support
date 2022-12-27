import { FiCopy, FiX } from "react-icons/fi";
import { useContext } from "react";
import { Context } from "../context/UserContext";

const Share = () => {
  const { card_value, getCard } = useContext(Context);

  const handleClick = () => {
    getCard("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://estarlincito.tech/#/item/${card_value.url}`
    );
  };

  return (
    <>
      {card_value === "" ? null : (
        <div className="Share__container">
          <div className="Share">
            <div className="Share__header">
              <h1 className="Share__title">Compartir</h1>

              <i className="FiX" onClick={handleClick}>
                <FiX />
              </i>
            </div>
            <div className="Share__line"></div>
            <div className="Share__contents">
              <img src={card_value.img} alt="" className="Share__img" />
              <div>
                <h3 className="Share__subtiitle">{card_value.subtitle}</h3>
                <p className="Share__text">{card_value.description}</p>
              </div>
            </div>

            <div className="Share__link">
              <i className="FiCopy" onClick={copyToClipboard}>
                <FiCopy /> Copiar link
              </i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Share;
