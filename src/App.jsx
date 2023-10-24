// Import necessary styles and components
import styles from "./style";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
