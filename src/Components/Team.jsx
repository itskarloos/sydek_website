import { image } from "../assets";
import styles from "../style";
import "./Team.css";
const Team = () => {
  return (
    <section id="home" className={` flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between w-[100%] flex-wrap">
          <div className="service-text">
            <h1 className="flex-1 font-manrope font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[60px] z-[1] ">
              Team
            </h1>
          </div>
        </div>

        <p className={`${styles.paragraph} font-thin`}>
          Our development team is competitive because we are experts in the
          latest technologies, have a proven track record of success, and are
          committed to excellence.
        </p>
      </div>

      <div className="team-container">
        <div className="team">
          <div className="team-img">
            <img src={image} alt="Team Image" />
            <div className="team-social">
              <a className="social-tw" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="social-fb" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="social-li" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-in" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="social-yt" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="team-content">
            <h2>Michael Seyoum</h2>
            <h3>CEO & Founder</h3>
            <p>Development and creative director at creative studio</p>
            <div className="team-skill">
              <div className="skill-name">
                <p>Figma</p>
                <p>90%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-90"></div>
              </div>
              <div className="skill-name">
                <p>CSS</p>
                <p>80%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-80"></div>
              </div>
              <div className="skill-name">
                <p>Flutter</p>
                <p>70%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
