import { useParams } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useEffect } from "react";
import Card from "./Card";

const CardUrl = () => {
  const { data_card, close_share, getDataJson } = useContext(UserContext);


  useEffect(() => {
    getDataJson();
  }, []);

  const { url_id } = useParams();

  // const data = data_card.map((todo, index) =>{
  //   return todo.subtitle
  // })

  return (
    <>
      {!data_card.length == 0? (
        <Card
          id={data_card[url_id].id}
          subtitle={data_card[url_id].subtitle}
          descripction={data_card[url_id].descripction}
          img={data_card[url_id].imgcard}
        />
      ) : null}
    </>
  );
};

export default CardUrl;
