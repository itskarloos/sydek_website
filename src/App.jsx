import styles from "./style";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
        <Routes>
          {/* Define routes using Route components with lowercase paths */}
          <Route path="/home" exact element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/" exact element={<LandingPage />} />
        </Routes>
      </Router>

      {/* Render the Footer component */}
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
