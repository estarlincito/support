import { HashRouter as Router, Routes, Route } from "react-router-dom";
// -------------CSS----------------
import "./assets/css/app.css";
import "./assets/css/menu.css";
import "./assets/css/footer.css";
import "./assets/css/notFound.css";
import "./assets/css/share.css";
import "./assets/css/card.css";
import "./assets/css/contact.css";
import "./assets/css/cardUrl.css";
import "./assets/css/mediaScreen.css";
import "./assets/font/stylesheet.css";

// -------------JSX----------------
import Menu from "./components/Menu";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Service from "./components/Service";
import CardUrl from "./components/CardUrl";
import Share from "./components/Share";
import NoFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Menu />
      <div className="container">
        <Share />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/item/:url_id" element={<CardUrl />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
