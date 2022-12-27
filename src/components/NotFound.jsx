import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/UserContext";

const NotFound = () => {
  const { img_path, HelmetData } = useContext(Context);
  return (
    <>
      <HelmetData title="Error 404" />
      <div className="error">
        <div className="error__info">
          <h2 className="error__title">Lo sentimos…</h2>
          <p className="error__text">
            Esta página no existe.
            <br />
            Puedes regresar a la
            <Link to="/"> página principal </Link>
            de Estarlincito.
          </p>
          <img
            className="error__img"
            src={img_path.undraw_page_not_found_re_e9o6__estarlincito}
            alt="Imagen of undraw_page_not_found_re_e9o6__estarlincito"
          />
        </div>
      </div>
    </>
  );
};

export default NotFound;
