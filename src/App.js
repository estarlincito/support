import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import home from './components/home';
import service from './components/service';
import contact from './components/contact';
import err404 from './components/404';

function App() {
  return (
   <Router>
      <div className='container'>
        {/* menu */}
          <nav>
            <a><Link to="/">Inicio</Link></a>
            <a><Link to="/service">Servicios</Link></a>
            <a><Link to="/contact#intro">Contacto</Link></a>
          </nav>
          <h1 class="intro" id='intro'></h1>
    <Switch>
      {/* 404 */}
      <Route path="/404">
        {err404}
      </Route>

      {/* contact */}
      <Route path="/contact" exact>
        {contact}
      </Route>

      {/* service */}
      <Route path="/service" exact>
        {service}
      </Route>

      {/* home */}
      <Route path="/" exact>
        {home}
      </Route>
    </Switch>

      <footer>
          <div class="contact" id="contact">
            <a href="mailto:support@estarlincito.tech"><i class="bi bi-envelope-fill"></i></a>
            <a href="https://twitter.com/estarlincito" target="bank"><i class="bi bi-twitter"></i></a>
          </div>
          <div>
              Copyright © 2022 <a><Link to="/">Estarlincito</Link></a>
          </div>
      </footer>
    </div>
  </Router>  
  );
}
export default App;

