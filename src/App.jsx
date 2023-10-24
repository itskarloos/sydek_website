// Import necessary styles and components
import styles from "./style";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  LandingPage,
  Footer,
  Navbar,
  Team,
  Contact
} from "./Components";

const App = () => {
  const ref0 = useRef(null);
  const isInView0 = useInView({ ref: ref0, once: true });
  const mainControls0 = useAnimation();

  // Effect to trigger animation when Hero section is in view
  useEffect(() => {
    if (isInView0) {
      mainControls0.start("visible");
    }
  }, [isInView0]);

  // Create a ref and useInView hook for the Service section
  const ref1 = useRef(null);
  const isInView1 = useInView({ ref: ref1, once: true });
  const mainControls1 = useAnimation();

  // Effect to trigger animation when Service section is in view
  useEffect(() => {
    if (isInView1) {
      mainControls1.start("visible");
    }
  }, [isInView1]);

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Render Navbar component */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Router>
        <Routes>
          <Route path="/Home" exact Component={LandingPage} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/Team" Component={Team} />
        </Routes>
      </Router> 
      <div className="footerContainer" >
        <Footer />
      </div> 
    </div>
  );
}

export default App;
