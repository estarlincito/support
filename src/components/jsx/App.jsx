import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import UserState from "../../context/UserState";
import { Helmet } from "react-helmet";

// -------------CSS----------------
import "..//css/app.css";
import "..//css/menu.css";
import "..//css/footer.css";
import "..//css/notFound.css";
import "..//css/share.css";
import "..//css/card.css";
import "..//css/contact.css";
import "..//css/cardUrl.css";
import "..//css/mediaScreen.css";
import "..//assets/font/stylesheet.css";
// -------------CSS----------------END

// -------------JSX----------------
import ScrollToTop from "./ScrollToTop";
import Menu from "./Menu";
import Footer from "./Footer";
import Share from "./Share";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import CardUrl from "./CardUrl";
import NotFound from "./NotFound";
// import Head from "./Head";
// -------------JSX----------------END

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://estarlincito.tech/static/media/favicon-96x96.2c60b5c1b9aab9f1400b.ico"
        />
      </Helmet>
      <UserState>
        <ScrollToTop />
        <Menu />
        <div className="container">
          <Share />
          <Switch>
            <Route path="/contact" exact component={Contact} />
            <Route path="/service" exact component={Service} />
            <Route path="/" exact component={Home} />
            <Route path="/:url_id" exact component={CardUrl} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </UserState>
    </Router>
  );
}
export default App;
