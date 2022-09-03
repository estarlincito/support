import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
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
