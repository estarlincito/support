import {
    Link
  } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <div>
            {/* <a href="mailto:support@estarlincito.tech"><i class="bi bi-envelope-fill"></i></a> */}
            <a href="https://twitter.com/estarlincito" target="bank"><i class="bi bi-twitter"></i></a>
            </div>
            <div>
                Copyright © 2022 <a><Link to="/">Estarlincito</Link></a>
            </div>
        </footer>
    );
  }

export default Footer;