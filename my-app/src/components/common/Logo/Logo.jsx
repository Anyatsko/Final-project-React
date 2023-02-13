import React from "react";
import './Logo.css'
import LogoImg from './logo.png'

const Logo = () => {
    return (
        <div className="header-logo">
        <img src={LogoImg} alt="logo" className="header-logo-img"/>

        </div>

    )
}

export default Logo