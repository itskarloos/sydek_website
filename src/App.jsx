import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./style";
import {
  LandingPage,
  Footer,
  Navbar,
  Team,
  Contact,
  Services,
  AboutPage,
} from "./Components";

const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/home", element: <LandingPage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/team", element: <Team /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <Services /> },
];

// TODO: Add a loading screen

const App = () => {
  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <NavbarWrapper />
        <main>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </main>
        <FooterWrapper />
      </div>
    </Router>
  );
};

const NavbarWrapper = () => (
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
    </div>
  </div>
);

const FooterWrapper = () => (
  <div className="footerContainer">
    <Footer />
  </div>
);

export default App;
