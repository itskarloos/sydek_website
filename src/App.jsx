import styles from "./style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  Footer,
  Navbar,
  Team,
  Contact,
  Services,
  AboutPage,
} from "./Components";
import { Fragment } from "react";

const App = () => {
  return (

    <Fragment>
      <div className="bg-primary w-full overflow-hidden">
        <Router>
          {/* Render Navbar component */}
          <div className={`${styles.paddingX} ${styles.flexCenter} `}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          {/* Set up routing with React Router */}
          
            <Routes>
              {/* Define routes using Route components with lowercase paths */}
              <Route path="/" exact element={<LandingPage />} />
              <Route path="/home" element={<LandingPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<Services />} />
            </Routes>
        
          {/* Render the Footer component */}
          <div className="footerContainer">
            <Footer />
          </div>
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
