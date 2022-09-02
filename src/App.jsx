import React from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Share from "./components/Share";
import Home from "./components/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

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
