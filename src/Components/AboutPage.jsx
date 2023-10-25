import { Fragment } from "react";
// import { Contact } from "./Contact";
import { 
    Commitment,
    Growth,
    Innovation,
    Ownership,
    Postivity,
    TeamWork } from "../assets"
import "./AboutPage.css"

const AboutPage = () => {
    return (
        <Fragment>
            <section className="AboutContainer">
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
                <div className="VlauesContainer">
                    <h1 className="Title font-manrope font-semibold text-[60px] text-white z-[1]">
                        Our Values
                    </h1>
                    <div className="ValuesList">
                        <div className="ValueCard">
                            <img src= {Innovation} alt= "Innovation Sync" />
                            <h4 className="font-manrope font-semibold text-[25px] text-white z-[1]">Innovation</h4>
                            <p>Building an enterprise doesn't need nightmare or cost your thousands</p>
                        </div>
                        <div className="ValueCard">
                            <img src= {Growth} alt= "Innovation Sync" />
                            <h4 className="font-manrope font-semibold text-[25px] text-white z-[1]">Growth</h4>
                            <p>Building an enterprise doesn't need nightmare or cost your thousands</p>
                        </div>
                        <div className="ValueCard">
                            <img src= {Ownership} alt= "Innovation Sync" />
                            <h4 className="font-manrope font-semibold text-[25px] text-white z-[1]">Ownership</h4>
                            <p>Building an enterprise doesn't need nightmare or cost your thousands</p>
                        </div>
                        <div className="ValueCard">
                            <img src= {TeamWork} alt= "Innovation Sync" />
                            <h4 className="font-manrope font-semibold text-[25px] text-white z-[1]">Team Work</h4>
                            <p>Building an enterprise doesn't need nightmare or cost your thousands</p>
                        </div>
                    </div>
                    
                </div>
                
                {/* <Contact /> */}
            </section>
        </Fragment>
    );
}

export default AboutPage;