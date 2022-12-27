import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/UserContext";
import Card from "./Card";
import { Navigate } from "react-router-dom";

const CardUrl = () => {
  const { url_id } = useParams();
  const { data, HelmetData } = useContext(Context);

  const [item] = data.filter((items) => items.url === url_id);

  return (
    <div className="card_url card__container">
      {item == undefined ? (
        <Navigate to="*" />
      ) : (
        <>
          <HelmetData title={item.subtitle} />
          <Card
            key={item.url}
            subtitle={item.subtitle}
            description={item.description}
            img={item.img}
          />
        </>
      )}
    </div>
  );
};

export default CardUrl;
