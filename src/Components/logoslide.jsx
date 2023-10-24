import React from "react";
import { ble,post,zenon } from "../assets";
import "./logo.css"
const LogoSlide = () => {
    return(
        <div className="logos">
        <div className="logos-slide">
          <img src={ble} />
        </div>
  
       
        
        <div className="logos-slide">
          <img src={ble} />
        </div>
        <div className="logos-slide">
          <img src={ble} />
        </div>
        <div className="logos-slide">
          <img src={ble} />
        </div>
        <div className="logos-slide">
          <img src={ble} />
        </div>
  
        
        
      </div>
    )
}
export default LogoSlide