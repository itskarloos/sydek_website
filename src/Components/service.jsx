import React from "react";
import { Link } from "react-router-dom";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import ErrorBoundary from "./ErrorBoundary";
import { saas, mobile, webdev, ui } from "../assets";
import styles from "../style";
import "./Service.css";
import "./logo.css";

const ServiceCard = ({ color, image, title, description }) => (
  <GlowCapture>
    <Glow color="hsl(239, 99%, 50%)">
      <div className={`CardContainer glow:bg-opacity-30 glow:bg-${color}-700`}>
        <div className="CardImage">
          <img
            className="development w-[45px] h-[45px]"
            alt={title}
            src={image}
          />
        </div>
        <p className="CardHeading">{title}</p>
        <p className="CardParagraph">{description}</p>
      </div>
    </Glow>
  </GlowCapture>
);

const Service = () => {
  const services = [
    {
      color: "blue",
      image: ui,
      title: "UI/UX Design",
      description:
        "Our team will create a seamless user experience design for you",
    },
    {
      color: "purple",
      image: webdev,
      title: "Web Development",
      description:
        "Our team builds great websites by combining creativity, technology, and user experience.",
    },
    {
      color: "green",
      image: saas,
      title: "SaaS",
      description:
        "Our team builds great SaaS that are user-centric, scalable, and secure.",
    },
    {
      color: "yellow",
      image: mobile,
      title: "Mobile Apps",
      description:
        "Our team builds great mobile apps that are user-friendly, engaging, and innovative.",
    },
  ];

  return (
    <ErrorBoundary>
      <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between w-[100%] flex-wrap">
            <div className="service-text">
              <h1 className="flex-1 font-manrope font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[60px] z-[1]">
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
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div
            className={`flex ${styles.flexStart} flex-row flex-wrap justify-around mt-2 w-[100%]`}
          >
            <button className="service-btn flex mt-5">
              <Link to="/services">More Services</Link>
            </button>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Service;
