import React from "react";
import { earth } from "../assets";
import "./logo.css";
import styles from "../style";
import { GlowCapture, Glow } from "@codaworks/react-glow";

export const Box = () => {
  return (
    <>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}
      >
        <div className=" flex flex-col justify-between items-left w-full z-[1]">
          <h1 className="flex-1 font-manrope font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[60px] z-[1] xs:text-[40px]">
            Empowering Businesses <br className="sm:block hidden" />
            {""}
            <span className="text-gradient z-[1]"> Globally </span>
            {""}
          </h1>
        </div>
      </div>
      <div className="box-container mt-7">
        <div className="group">
          <img className="earth" alt="Earth" src={earth} />
        </div>
      </div>
    </>
  );
};

export default Box;
