import React from 'react'
import './Hero.css'
import hero from '../../assets/water.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from "../../assets/Resume.pdf"


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={hero} alt=""></img>
        <h1>hi. i'm <span>william shen</span></h1>
        <h2>aka uselessleaf</h2>
        <p>part time - coder, cuber, athlete, musician, gamer</p>
        
        <div className="hero-action">
            <div className="hero-connect">
                <a className='anchor-link' href='#contact'>
                connect with me
                </a>
            </div>
            <div className="hero-resume">
                <a href={resume} download="William Shen - Resume">see my resume</a>
            </div>
        </div>
    </div>
  )
}

export default Hero
