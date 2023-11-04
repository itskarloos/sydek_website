import { ble, post, zenon, amazon, blu, rehoboth } from "../assets";
import "./logo.css";


// Import your CSS file

const LogoSlide = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        <div className="carousel-item">
          <img src={post} alt="Logo 1" />
        </div>
        <div className="carousel-item">
          <img src={ble} alt="Logo 2" />
        </div>
        <div className="carousel-item">
          <img src={zenon} alt="Logo 3" />
        </div>
        <div className="carousel-item">
          <img src={rehoboth} alt="Logo 4" />
        </div>
        <div className="carousel-item">
          <img src={post} alt="Logo 5" />
        </div>
        <div className="carousel-item">
          <img src={blu} alt="Logo 5" />
        </div>
        <div className="carousel-item">
          <img src={amazon} alt="Logo 5" />
        </div>
        {/* Add more logo items as needed */}
      </div>
    </div>
  );
};

export default LogoSlide;
