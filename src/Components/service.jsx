import styles from "../style";
import "./Service.css";
import "./logo.css";
import { Link } from "react-router-dom";


import { saas, mobile, webdev, ui, rectangle, arrow } from "../assets";
import React, { useState, useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";
import { GlowCapture, Glow } from "@codaworks/react-glow";
const Service = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newMousePosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newMousePosition);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between w-[100%] flex-wrap">
          <div className="service-text">
            <h1 className="flex-1 font-manrope font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[60px] z-[1] ">
              Service
            </h1>
          </div>
        </div>

        <p className={`${styles.paragraph} font-thin`}>
          We provide customized solutions that meet our clients' unique needs
          and help them succeed in an increasingly digital world.
        </p>
        <div
          className={`flex ${styles.flexStart} flex-row flex-wrap justify-around md:justify-between mt-[10px] w-[100%]`}
        >
          <GlowCapture>
            <Glow color="hsl(239, 99%, 50%)">
              <div className="CardContainer glow:bg-opacity-30 glow:bg-blue-700">
                <div className="CardImage">
                  <img className="development" alt="Development" src={ui} />
                </div>

                <p className="CardHeading">UI/UX Design</p>

                <p className="CardParagraph">
                  Our team will create a seemless user experience design for you
                </p>
              </div>
            </Glow>
          </GlowCapture>

          <GlowCapture>
            <Glow color="hsl(239, 99%, 50%)">
              <div className="CardContainer glow:bg-opacity-30 glow:bg-purple-700">
                <div className="CardImage">
                  <img
                    className="development w-[45px] h-[45px]"
                    alt="Development"
                    src={webdev}
                  />
                </div>

                <p className="CardHeading">Web Development</p>

                <p className="CardParagraph">
                  Our team builds great websites by combining creativity,
                  technology, and user experience.
                </p>
              </div>
            </Glow>
          </GlowCapture>

          <GlowCapture>
            <Glow color="hsl(239, 99%, 50%)">
              <div className="CardContainer glow:bg-opacity-30 glow:bg-green-700">
                <div className="CardImage">
                  <img
                    className="development w-[45px] h-[45px]"
                    alt="Development"
                    src={saas}
                  />
                </div>

                <p className="CardHeading">Saas</p>

                <p className="CardParagraph">
                  Our team builds great SaaS that are user-centric, scalable,
                  and secure.
                </p>
              </div>
            </Glow>
          </GlowCapture>

          <GlowCapture>
            <Glow color="hsl(239, 99%, 50%)">
              <div className="CardContainer glow:bg-opacity-30 glow:bg-yellow-700">
                <div className="CardImage">
                  <img
                    className="development w-[45px] h-[45px]"
                    alt="Development"
                    src={mobile}
                  />
                </div>

                <p className="CardHeading">Mobile Apps</p>

                <p className="CardParagraph">
                  Our team builds great mobile apps that are user-friendly,
                  engaging, and innovative.
                </p>
              </div>
            </Glow>
          </GlowCapture>
        </div>
        <div
          className={`flex ${styles.flexStart} flex-row flex-wrap justify-around mt-2 w-[100%]`}
        >
          <button className="service-btn flex mt-5"> <Link to="./Services">More Services</Link>  </button>
        </div>
      </div>
    </section>
  );
};
export default Service;
