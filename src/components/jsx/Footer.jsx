import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Footer = () => {
  const userContext = useContext(UserContext);
  const { footer_value, set_footer, get_card } = userContext;

  const handleInactive = () => {
    get_card(null);
    set_footer(false);
  };

  return (
    <footer className={footer_value ? "footer_share" : ""}>
      <div>
        <a href="https://twitter.com/estarlincito" target="bank">
          <i className="bi bi-twitter"></i>
        </a>
      </div>
      <div>
        Copyright © 2022 {null}
        <Link to="/" replace onClick={handleInactive}>
          Estarlincito
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
