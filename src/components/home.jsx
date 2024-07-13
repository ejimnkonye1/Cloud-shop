import React from "react";
import '../css/home.css'
import img from '../assets/images/home.png'
export const HomeImg = () => {
    return(
        <div className="main row">
    <div className="triangle col-6">
    <span className="triangle-text">Phones <span className="tab">&  Tablets</span></span>
    </div>
    <div className="col-6 im">
        {/* <img src={img} style={{objectFit:'cover'}} /> */}
    </div>
    
        </div>
    )
}