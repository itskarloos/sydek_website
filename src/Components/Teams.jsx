import { image, zapy, nahom, peter, esperu } from "../assets";
import styles from "../style";
import "./Team.css";

const Teams = () => {
  return (
    <section className={` flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart}  flex-col xl:px-16 sm:px-16 px-6`}
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
      <div className="flex md:ml-6 w-[90%] flex-row justify-around flex-wrap mt-[20px]">
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
              <h3>COO and Product Manager</h3>
              <p>Full Stack Development & Testing</p>
              <div className="team-skill">
                <div className="skill-name">
                  <p>Python</p>
                  <p>70%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-70"></div>
                </div>
                <div className="skill-name">
                  <p>Next.js</p>
                  <p>80%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-80"></div>
                </div>
                <div className="skill-name">
                  <p>MongoDB</p>
                  <p>80%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="team-container">
          <div className="team">
            <div className="team-img">
              <img src={peter} alt="Team Image" />
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
              <h2>Petros woldu</h2>
              <h3>DevOps Engineer</h3>
              <p>AI & Machine Learning</p>
              <div className="team-skill">
                <div className="skill-name">
                  <p>Full-Stack Development</p>
                  <p>90%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-90"></div>
                </div>
                <div className="skill-name">
                  <p>AI & Automation</p>
                  <p>90%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-90"></div>
                </div>
                <div className="skill-name">
                  <p>Web Scraping & Data Processing</p>
                  <p>90%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-90"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
              <h3>CTO and System Designer</h3>
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
                  <p>90%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-90"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-container">
          <div className="team">
            <div className="team-img">
              <img src={zapy} alt="Team Image" />
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
              <h2>Zeammanuel Fetene</h2>
              <h3>Front-End Engineer</h3>
              <p>UI/UX and Product Generation</p>
              <div className="team-skill">
                <div className="skill-name">
                  <p>Front-End Development</p>
                  <p>90%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-90"></div>
                </div>
                <div className="skill-name">
                  <p>Shadcin</p>
                  <p>70%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-70"></div>
                </div>
                <div className="skill-name">
                  <p>Modular CSS</p>
                  <p>80%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-container">
          <div className="team">
            <div className="team-img">
              <img src={esperu} alt="Team Image" />
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
              <h2>Esperansa Dereje</h2>
              <h3>Data Analyst</h3>
              <p>Genrating and Visualizing Data Modles</p>
              <div className="team-skill">
                <div className="skill-name">
                  <p>Mathematical Analysis</p>
                  <p>90%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-90"></div>
                </div>
                <div className="skill-name">
                  <p>Financial Reporting:</p>
                  <p>80%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-80"></div>
                </div>
                <div className="skill-name">
                  <p>Data Visualization</p>
                  <p>80%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar w-80"></div>
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
