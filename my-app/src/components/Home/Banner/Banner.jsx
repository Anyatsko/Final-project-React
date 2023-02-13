import React from "react";
import './Banner.css'
import bannerImg from './banner.jpg'
import Logo from "../../common/Logo/Logo";


const Banner = ({ handleScrollMenu }) => {
    return (
        <header>
            <div className="header-content">
                <Logo/>
                </div>
            <div className="banner-content">
            <div className="banner-content-main">
            <h1>Food React ptroject</h1>
            <button onClick={handleScrollMenu}>View menu</button>  
            </div>                      
            <img src={bannerImg} alt="banner" className="banner"/>
           
            </div>
        </header>


    )
}

export default Banner 