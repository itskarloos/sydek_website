import { Fragment } from "react";
import "./AboutPage.css"

const AboutPage = () => {
    return (
        <Fragment>
            <div className="AboutContainer">
                <div className="About-Hero">
                    <h1 className="Handle">
                        About Us
                    </h1>
                    <p className="discription">
                    That&lsquos why we&lsquore committed to delivering innovative IT solutions to 
                    businesses of all sizes. Our team of experienced 
                    professionals is dedicated to helping you achieve your 
                    goals and thrive in a rapidly evolving digital landscape.
                    </p>
                </div>
                <div className="MainDescription">
                    <h3 className="Moto">
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