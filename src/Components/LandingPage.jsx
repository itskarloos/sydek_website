// Import necessary styles and components
import styles from "../style";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Contact,
  Testimonials,
  Hero,
  Techhnologies,
  Service,
  Box
} from "./";

const LandingPage = () => {
  // Create a ref and useInView hook for the Hero section
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
      {/* Render Hero section with animations */}
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

      {/* Render Service and other sections */}
      <div className={`bg-primary ${styles.flexStart} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* Render Service section with animations */}
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
          {/* Render other components */}
          <Box />
          <Techhnologies />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
