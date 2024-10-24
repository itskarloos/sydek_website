import {
  ble,
  post,
  zenon,
  amazon,
  blu,
  rehoboth,
  om,
  googleLogo,
  diplomat,
} from "../assets";
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
        <div className="carousel-item">
          <img src={om} alt="Logo 6" />
        </div>
        <div className="carousel-item">
          <img src={googleLogo} alt="Logo 6" />
        </div>
        <div className="carousel-item">
          <img src={diplomat} alt="Logo 6" />
        </div>
      </div>
    </div>
  );
};

export default LogoSlide;
