import styles from "./logo.css";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Clients,
  Testimonials,
  Hero,
  Techhnologies,
} from "./Body/Technologies";
import Box from "./Header/Box/Box";
import { Contact } from "./Components/Contact Page";

const LandingPage = () => {
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
    // WHOLE PAGE FARMER ANIMATION PARENT DIV
    <div className="bg-primary w-full overflow-hidden">
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
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
