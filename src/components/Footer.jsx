import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/UserContext";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  const { getCard, getSubtile } = useContext(Context);

  const handleInactive = () => {
    getCard("");
    getSubtile("");
  };

  return (
    <footer className="footer">
      <p>
        {" "}
        Copyright © 2023
        <Link to="/" onClick={handleInactive}>
          {" "}
          Estarlincito{" "}
        </Link>
      </p>

      <Link to="https://twitter.com/estarlincito" target="bank">
        <FiTwitter />
      </Link>
    </footer>
  );
};

export default Footer;
