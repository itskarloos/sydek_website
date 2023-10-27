import styles from "../style";
import "./Founder.css";
import { founderInfo } from "../constants";
import { Fragment } from "react";

const Founders = () => {
    return (
        <Fragment>
            <section id="home" className={` flex-col ${styles.paddingY}`}>
                <div
                className={`flex-1 ${styles.flexStart} flex-col`}
                >
                <div className="flex flex-row justify-between w-[100%] flex-wrap">
                    <div className="service-text">
                    <h1 className="flex-1 font-manrope font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100px] leading-[60px] z-[1] ">
                        Founders
                    </h1>
                    </div>
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