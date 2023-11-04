// Import necessary styles and components
import styles from "../style";
import { Contact, Hero, Techhnologies, Service, Box } from "./";

const LandingPage = () => {
  // Create a ref and useInView hook for the Hero section

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Render Hero section with animations */}

      <Hero />

      {/* Render Service and other sections */}
      <div className={`bg-primary ${styles.flexStart} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* Render Service section with animations */}

          <Service />

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
