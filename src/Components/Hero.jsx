import React from "react";
import styles from "../style";
import { discount } from "../assets";
import Button from "./button";
import Button2 from "./button2";
import Logoslide from "./logoslide";


const Hero = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}
    >
      {/* Discount Banner */}
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
        <img src={discount} alt="discount" className="w-[40px] h-[40px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Your Vision Our Code</span>
        </p>
      </div>

      <div className="flex flex-col justify-between items-left w-[80%] z-[1]">
        {/* Main Heading */}
        <h1 className="flex-1 font-manrope font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[90px] leading-[60px] z-[1]">
          Solving Your <br className="sm:block hidden" />
          <span className="text-gradient z-[1]">Digital</span> Essentials.
        </h1>

        {/* Subtitle */}
        <p className={`${styles.paragraph} font-thin mt-3`}>
          Build software without borders. We offer a range of software
          development services, including web development, mobile app
          development, QA and testing, and UI/UX design.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-7 flex flex-row gap-3">
        <Button />
        <Button2 />
      </div>

      {/* Trusted By */}
      <div className="flex flex-col w-full mt-[90px] sm:[50px]">
        <div className="flex flex-row justify-around align-middle w-full ">
          <p className={`${styles.paragraph} font-thin text-white`}>
            Trusted By
          </p>
        </div>
        <Logoslide />
      </div>
    </div>

    <div>
      {/* Background Gradient */}
      <div className="absolute z-[0] w-[50%] p h-[50%] right-20 bottom-20 blue__gradient" />
      <div className="absolute z-[0] w-[50%] p h-[20%] right-0 top-0 purple__gradient" />
    </div>
  </section>
);

export default Hero;
