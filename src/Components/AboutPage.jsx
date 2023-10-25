import { Fragment } from "react";
// import { Contact } from "./Contact";
import { 
    Growth,
    Innovation,
    Ownership,
    TeamWork, 
    Work,
    Mission,
    Vision } from "../assets"
import "./AboutPage.css";
import styles from "../style"

const AboutPage = () => {
    return (
        <Fragment>
            <section id="AboutContainer" className= {`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className="HeroContainer">
                    <div className="AboutHero">
                        <h1 className="Handle font-manrope font-semibold ss:text-[72px] text-[52px] text-white z-[1] ">
                            About Us
                        </h1>
                        <p className="description font-manrope font-light text-[20px] text-white z-[1] ">
                        Our development team is competitive because we are experts in the latest technologies, 
                        have a proven track record of success, and are committed to excellence.
                        </p>
                    </div>
                    <div className="MainDescription">
                        <h3 className="Motto font-manrope font-semibold text-[60px] text-white z-[1]">
                            We believe that technology can change the WORLD.
                        </h3>
                        <p className="explianation">
                        That's why we are committed to delivering innovative IT solutions to businesses 
                        of all sizes. Our team of experienced professionals is dedicated to helping you 
                        achieve your goals and thrive in a rapidly evolving digital landscape.
                        </p>
                    </div>
                </div>
                <div className="WorkContainer">
                    <div className="ImgCard">
                        <img src= {Work} alt="Work Image Syncing" />
                    </div>
                    <div className="MissionContainer">
                        <div className="MissionContainer">
                            <h1 className="font-manrope font-semibold text-[25px]">
                                We're on a mission to bring ideas to life.
                            </h1>
                            <p className="MissionDescription">SYDEK stands at the forefront of software development, bridging the gap between visionary ideas and tangible solutions. With a global mindset, SYDEK seamlessly connects businesses with top software 
                            development talent worldwide, offering tailored teams and individual expertise. More than a service provider, SYDEK is a transformative partner, dedicated to crafting unique and innovative software solutions that 
                            pave the way for a successful digital future.</p>
                        </div>
                        <div className="IconContainer">
                            <div className="IconCard">
                                <div className="MImgCard">
                                    <img src= {Mission} alt="" />
                                </div>
                                <div className="TextCard">
                                    <h1>Mission</h1>
                                    <p>SYDEK’s mission is to boldly revolutionize the landscape of software development</p>
                                </div>
                            </div>
                            <div className="IconCard">
                                <div className="MImgCard">
                                    <img src= {Vision} alt="" />
                                </div>
                                <div className="TextCard">
                                    <h1>Mission</h1>
                                    <p>SYDEK’s mission is to boldly revolutionize the landscape of software development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="VlauesContainer">
                    <h1 className="Title font-manrope font-semibold text-[60px] text-white z-[1]">
                        Our Values
                    </h1>
                    <div className="ValuesList">
                        <div className="ValueCard">
                            <img src= {Innovation} alt= "Innovation Syncing" />
                            <h4 className="font-manrope font-semibold text-[25px] text-white z-[1]">Innovation</h4>
                            <p>Building an enterprise doesn't need nightmare or cost your thousands</p>
                        </div>
                        <div className="ValueCard">
                            <img src= {Growth} alt= "Growth Syncing" />
                            <h4 className="font-manrope font-semibold text-[25px] text-white z-[1]">Growth</h4>
                            <p>Building an enterprise doesn't need nightmare or cost your thousands</p>
                        </div>
                        <div className="ValueCard">
                            <img src= {Ownership} alt= "Ownership Syncing" />
                            <h4 className="font-manrope font-semibold text-[25px] text-white z-[1]">Ownership</h4>
                            <p>Building an enterprise doesn't need nightmare or cost your thousands</p>
                        </div>
                        <div className="ValueCard">
                            <img src= {TeamWork} alt= "Team Work Syncing" />
                            <h4 className="font-manrope font-semibold text-[25px] text-white z-[1]">Team Work</h4>
                            <p>Building an enterprise doesn't need nightmare or cost your thousands</p>
                        </div>
                    </div>
                    
                </div>
                <div className="ContactSection">
                    {/* <Contact /> */}
                </div>
            </section>
        </Fragment>
    );
}

export default AboutPage;