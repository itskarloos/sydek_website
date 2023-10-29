import styles from "../style";
import "./Founder.css";
import { founderInfo } from "../constants";
import { Fragment } from "react";

const Founders = () => {
  return (
    <Fragment>
      <section className={` flex-col ${styles.paddingY}`}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between w-[100%] flex-wrap">
            <div className="service-text">
              <h1 className="flex-1 font-manrope font-semibold ss:text-[60px] text-[45px] text-gradient text-white ss:leading-[100px] leading-[60px] z-[1] ">
                Founders
              </h1>
            </div>

            <p className={`${styles.paragraph} font-thin`}>
              Our Teams are a group of highly talented and experienced
              individuals who are passionate about our company's mission. They
              have a proven track record of success in the industry, and they
              are committed to making a difference in the world
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-[20px]">
          <div className="founder-container">
            {founderInfo.map((info) => (
              <div key={info.id} className="founder">
                <div className="founder-img">
                  <img src={info.picture} alt="Founder Image" />
                </div>
                <div className="founder-content">
                  <h2>{info.name}</h2>
                  <h3>{info.position}</h3>
                  <p>{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute z-[0] w-[50%] p h-[20%] right-0 top-0 purple__gradient" />
      </section>
    </Fragment>
  );
};

export default Founders;
