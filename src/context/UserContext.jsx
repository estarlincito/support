import { createContext, useEffect, useState } from "react";
import data from "../assets/data.json";
import HelmetData from "../components/HelmetData";
import img_path from "../components/img_path";
import hash from "../components/hash";
export const Context = createContext();

export const ContextProvider = (props) => {
  //Get card Value of one item selected
  const [card_value, setCard_value] = useState("");
  const getCard = (card) => {
    setCard_value(card);
  };

  //Get Subtitle Value of one item selected
  const [subtitle_value, setSubtitle_value] = useState("");
  const getSubtile = (subtitle) => {
    setSubtitle_value(subtitle);
  };

  //Check if window.location.href Change
  useEffect(() => {
    getCard("");
    getSubtile("");
  }, [hash()]);

  return (
    <>
      <Context.Provider
        value={{
          HelmetData,
          data,
          img_path,
          card_value,
          getCard,
          subtitle_value,
          getSubtile,
        }}
      >
        {props.children}
      </Context.Provider>
    </>
  );
};
