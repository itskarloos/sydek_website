import styles from "../style";
import "./Service.css";
import "./Services.css";
import "./logo.css";

import {
  saas,
  mobile,
  webdev,
  ui,
  rectangle,
  arrow,
  Ta,
  Ic,
  Dm,
  Branding,
  Vector1,
  Vector2,
  Vector3,
  Vector4,
} from "../assets";
import React, { useState, useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";
import { GlowCapture, Glow } from "@codaworks/react-glow";

const Services = () => {
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
          className={`flex ${styles.flexStart} flex-row flex-wrap justify-around md:justify-between m-[10px] w-[100%]`}
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

          <GlowCapture>
            <Glow color="hsl(239, 99%, 50%)">
              <div className="CardContainer glow:bg-opacity-30 glow:bg-red-700">
                <div className="CardImage">
                  <img
                    className="development w-[45px] h-[45px]"
                    alt="Development"
                    src={Ta}
                  />
                </div>

                <p className="CardHeading">Team Augmentation</p>

                <p className="CardParagraph">
                  We will provide resources for your company both for short &
                  long term projects.
                </p>
              </div>
            </Glow>
          </GlowCapture>
          <GlowCapture>
            <Glow color="hsl(239, 99%, 50%)">
              <div className="CardContainer glow:bg-opacity-30 glow:bg-orange-700">
                <div className="CardImage">
                  <img
                    className="development w-[45px] h-[45px]"
                    alt="Development"
                    src={Ic}
                  />
                </div>

                <p className="CardHeading">IT Consulting</p>

                <p className="CardParagraph">
                  strategy, tools, and implementation, our team of experts are
                  available to help you.
                </p>
              </div>
            </Glow>
          </GlowCapture>
          <GlowCapture>
            <Glow color="hsl(239, 99%, 50%)">
              <div className="CardContainer glow:bg-opacity-30 glow:bg-blue-500">
                <div className="CardImage">
                  <img
                    className="development w-[45px] h-[45px]"
                    alt="Development"
                    src={Dm}
                  />
                </div>

                <p className="CardHeading">Digital Marketing</p>

                <p className="CardParagraph">
                  Our team of digital marketing experts will help you reach your
                  target audience and grow your business online.
                </p>
              </div>
            </Glow>
          </GlowCapture>
          <GlowCapture>
            <Glow color="hsl(239, 99%, 50%)">
              <div className="CardContainer glow:bg-opacity-30 glow:bg-yellow-500">
                <div className="CardImage">
                  <img
                    className="development w-[45px] h-[45px]"
                    alt="Development"
                    src={Branding}
                  />
                </div>

                <p className="CardHeading">Branding</p>

                <p className="CardParagraph">
                  We help businesses build brands that are authentic, relevant,
                  and engaging.
                </p>
              </div>
            </Glow>
          </GlowCapture>
        </div>
        <div className="flex flex-row justify-between w-[100%] flex-wrap">
          <div className="service-text">
            <h1 className="flex-1 font-manrope font-semibold ss:text-[65px] text-[45px] text-white ss:leading-[100px] leading-[60px] z-[1] ">
              Why Us?
            </h1>
          </div>
        </div>
        <div className="VectorSection">
          <div className="VectorContainer">
            <img src={Vector1} className="VectorImage" />
            <h1 className="VectorHeading">Expertise</h1>
            <p className="VectorParagraph">
              Our team of experienced experts have the knowledge and expertise
              to deliver innovative IT solutions that meet your unique needs.
            </p>
          </div>

          <div className="VectorContainer">
            <img src={Vector2} className="VectorImage" />
            <h1 className="VectorHeading">Technology</h1>
            <p className="VectorParagraph">
              We stay up to date with the latest trends and technologies in the
              IT industry, so you can get the most advanced solutions available.
            </p>
          </div>

          <div className="VectorContainer">
            <img src={Vector3} className="VectorImage" />
            <h1 className="VectorHeading">Solutions</h1>
            <p className="VectorParagraph">
              We take a personalized approach to every project, working closely
              with you to understand your business and create solutions.
            </p>
          </div>

          <div className="VectorContainer">
            <img src={Vector4} className="VectorImage" />
            <h1 className="VectorHeading">Results</h1>
            <p className="VectorParagraph">
              Our track record speaks for itself – we've helped businesses of
              all sizes and industries achieve their goals with our IT
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
