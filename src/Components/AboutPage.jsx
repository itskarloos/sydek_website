import { Fragment } from "react";
import "./AboutPage.css"

const AboutPage = () => {
    return (
        <Fragment>
            <div className="AboutContainer">
                <div className="About-Hero">
                    <h1 className="Handle font-manrope font-semibold ss:text-[72px] text-[52px] text-white z-[1] ">
                        About Us
                    </h1>
                    <p className="discription font-manrope font-light text-[20px] text-white z-[1] ">
                    Our development team is competitive because we are experts in the latest technologies, 
                    have a proven track record of success, and are committed to excellence.
                    </p>
                </div>
                <div className="MainDescription">
                    <h3 className="Moto font-manrope font-semibold text-[32px] text-white z-[1]">
                        We believe that technology can change the WORLD.
                    </h3>
                    <p className="explianation">
                    That&lsquos why we&lsquore committed to delivering innovative IT solutions to businesses 
                    of all sizes. Our team of experienced professionals is dedicated to helping you 
                    achieve your goals and thrive in a rapidly evolving digital landscape.
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default AboutPage;