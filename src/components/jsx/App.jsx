import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// -------------CSS----------------
import "..//css/app.css"
import "..//css/menu.css"
import "..//css/footer.css"
import "..//css/notFound.css"
import "..//css/share.css"
import "..//css/card.css"
import "..//css/contact.css"
import "..//css/mediaScreen.css"
import "..//font/stylesheet.css"
// -------------CSS----------------END

// -------------JSX----------------
import ScrollToTop from "./ScrollToTop";
import Menu from "./Menu";
import Footer from "./Footer";
import Share from "./Share";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import NotFound from "./NotFound";
// -------------JSX----------------END


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Menu />
      <Share />
      <div className="container">
        <Switch>
          <Route path="/contact" exact component={Contact} />
          <Route path="/service" exact component={Service} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
