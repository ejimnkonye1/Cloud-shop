import React from "react";
import '../css/home.css'
import img from '../assets/images/home.png'
export const HomeImg = () => {
    return(
        <div className="main">
    <div class="triangle">
    <span className="triangle-text">Phones <span className="tab">&  Tablets</span></span>
    </div>
    <div>
        <img src={img} />
    </div>
    
        </div>
    )
}