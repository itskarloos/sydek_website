import styles from "./style";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {
  LandingPage,
  Footer,
  Navbar,
  Team,
  Contact,
  Services,
  AboutPage,
} from "./Components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Render Navbar component */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Set up routing with React Router */}
      <Router>
        <Switch>
          {/* Define routes using Route components with lowercase paths */}
          <Route path="/Home" exact element={<LandingPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/" exact element={<LandingPage />} />
        </Switch>
      </Router>

      {/* Render the Footer component */}
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
