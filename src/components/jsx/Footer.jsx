import { Link } from "react-router-dom";
//Get UserContext
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Footer = () => {
  //Get UserContext
  const userContext = useContext(UserContext);
  const { selected_card } = userContext;



  return (
    <footer className={selected_card ? "footer_share": ""}>
      <div>
        <a href="https://twitter.com/estarlincito" target="bank">
          <i className="bi bi-twitter"></i>
        </a>
      </div>
      <div>
        Copyright © 2022 <Link to="/">Estarlincito</Link>
      </div>
    </footer>
  );
};

export default Footer;
