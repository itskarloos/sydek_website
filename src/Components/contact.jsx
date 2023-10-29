import ContactForm from "./ContactForm";
import { location, logo, mail, phone } from "../assets";

import styles from "../style";
import "./Contact.css";

const Contact = () => {
  return (
    <section className={` flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}
      >
        <div className="flex flex-col justify-between w-[100%] flex-wrap">
          <div className="service-text">
            <h1 className="flex-1 font-manrope font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[60px] z-[1] ">
              Contact
            </h1>
          </div>
          <p className={`${styles.paragraph} font-thin`}>
            We would love to hear from you. Contact us today.
          </p>
        </div>

        <div className="Contact xs:flex-wrap flex justify-around w-[100%]">
          <div className="ContactCard xs:w-[100%] ss:w-[50%]">
            <div className="image-div">
              <div id="contact-image">
                <img className="logo" src={logo} />
                <div className="paragraph-container">
                <div className="flex flex-row m-1">
                    <img
                      className="h-[15px] w-[15px] mt-[4px] mr-[5px]"
                      src={phone}
                    ></img>
                    <p className="image-paragraph"> +1 614 400 4200 </p>
                  </div>
                  <div className="flex flex-row m-1">
                    <img
                      className="h-[15px] w-[15px] mt-[4px] mr-[5px]"
                      src={phone}
                    ></img>
                    <p className="image-paragraph"> +251 91 298 3759 </p>
                  </div>

                  <div className="flex flex-row m-1">
                    <img
                      className="h-[15px] w-[15px] mt-[4px] mr-[5px]"
                      src={mail}
                    ></img>
                    <p className="image-paragraph"> info@sydek.io </p>
                  </div>

                  <div className="flex flex-row m-1">
                    <img
                      className="h-[15px] w-[15px] mt-[4px] mr-[5px]"
                      src={location}
                    ></img>
                    <p className="image-paragraph">16192 Coastal
Highway, Lewes, Delaware 19958, County of Sussex.</p>
                  </div>

                  <div className="flex flex-row m-1">
                    <img
                      className="h-[15px] w-[15px] mt-[4px] mr-[5px]"
                      src={location}
                    ></img>
                    <p className="image-paragraph">Addis Ababa, Ethiopia</p>
                  </div>

                  <div className="image-paragraph2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="ContactForm__Wrapper xs:w-[100%] ss:w-[50%]">
            <div className="contact-form ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
