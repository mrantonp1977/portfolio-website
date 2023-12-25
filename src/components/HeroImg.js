import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";



const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"></img>

        </div>
        <div className="content">
            <p>
              Web Developer - Programmer  
            </p>
            
            <p>
              UI/UX Designer 
            </p>
            <p>
              Projects with Javascript, React.js and Next.js
            </p>
            
            <h1>Hi, I'm Antonis Papaioannou.</h1>
            <div>
                <Link to="./project" className="btn">Projects</Link>
                <Link to="./contact" className="btn btn-light">Contact</Link>

            </div>
            

        </div>
    </div>
  )
}

export default HeroImg