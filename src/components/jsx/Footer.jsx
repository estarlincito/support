import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Footer = () => {
  //Get UserContext
  const userContext = useContext(UserContext);
  const { active_value, setActive, close_share } = userContext;

  const handle_closeShare_setActive = () => {
    close_share();
    setActive(false);
  };

  return (
    <footer className={active_value ? "footer_share" : ""}>
      <div>
        <a href="https://twitter.com/estarlincito" target="bank">
          <i className="bi bi-twitter"></i>
        </a>
      </div>
      <div>
        Copyright © 2022 {null}
        <Link to="/" replace onClick={handle_closeShare_setActive}>
          Estarlincito
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
