// Import necessary styles and components
import styles from "./style";
<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Contact,
  Teams,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Techhnologies,
  Service,
  Box,
} from "./Components";

const App = () => {
  const ref0 = useRef(null);
  const isInView0 = useInView(ref0, { once: true });
  const mainControls0 = useAnimation();

  useEffect(() => {
    if (isInView0) {
      mainControls0.start("visible");
    }
  }, [isInView0]);

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const mainControls1 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      mainControls1.start("visible");
    }
  }, [isInView1]);

  return (
    <div className="bg-primary w-full overflow-hidden">
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  Footer,
  Navbar,
  Team,
  Contact
} from "./Components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Render Navbar component */}
>>>>>>> origin/main
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
<<<<<<< HEAD
      </div>

      <div ref={ref0} className={`bg-primary ${styles.flexStart}`}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls0}
          transition={{ duration: 1, delay: 0.5 }}
          className={`${styles.boxWidth}`}
        >
          <Hero />
        </motion.div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div ref={ref1}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls1}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Service />
            </motion.div>
          </div>
          <Box />
          <Techhnologies />
          <Testimonials />

          <Teams />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
=======
      </div>

      {/* Set up routing with React Router */}
      <Router>
        <Routes>
          {/* Define routes using Route components */}
          <Route path="/Home" exact element={<LandingPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
      </Router>

      {/* Render the Footer component */}
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
>>>>>>> origin/main
