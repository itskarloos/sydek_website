import { image, ananya, nahom } from "../assets";
import styles from "../style";
import "./Team.css";

const Teams = () => {
  return (
    <section className={` flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between w-[100%] flex-wrap">
          <div className="service-text">
            <h1 className="flex-1 font-manrope font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[60px] z-[1] ">
              Team
            </h1>
          </div>

          <p className={`${styles.paragraph} font-thin`}>
            Our development team is competitive because we are experts in the
            latest technologies, have a proven track record of success, and are
            committed to excellence.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-[20px]">
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
              <h3>Creative Director</h3>
              <p>Development of company assets and Brand deferentiation.</p>
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
        <div className="team-container">
          <div className="team">
            <div className="team-img">
              <img src={ananya} alt="Team Image" />
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
              <h2>Ananya F/mariam</h2>
              <h3>Full-Stack Developer</h3>
              <p>Building Products and Maintenance.</p>
              <div className="team-skill">
                <div className="skill-name">
                  <p>API Integration</p>
                  <p>90%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-90"></div>
                </div>
                <div className="skill-name">
                  <p>Data Science</p>
                  <p>80%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-80"></div>
                </div>
                <div className="skill-name">
                  <p>Back-End Development</p>
                  <p>70%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-container">
          <div className="team">
            <div className="team-img">
              <img src={nahom} alt="Team Image" />
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
              <h2>Nahom Teguade</h2>
              <h3>System Designer</h3>
              <p>Strategy centric product development.</p>
              <div className="team-skill">
                <div className="skill-name">
                  <p>Product Generation</p>
                  <p>90%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-90"></div>
                </div>
                <div className="skill-name">
                  <p>Requirment Research</p>
                  <p>80%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-80"></div>
                </div>
                <div className="skill-name">
                  <p>System Development</p>
                  <p>70%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
