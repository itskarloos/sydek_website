// Import necessary styles and components
import styles from "./style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutPage, LandingPage, Footer, Navbar, Team, Contact } from "./Components";

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
          {/* Define routes using Route components */}
          <Route path="/Home" exact element={<LandingPage />} />
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/About" element={<AboutPage />} />
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