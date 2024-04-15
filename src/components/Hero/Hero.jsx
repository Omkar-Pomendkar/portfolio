import React from 'react'
import './Hero.css'
import omkar from '../../assets/omkar.jpeg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={omkar} alt="omkar" />
      <h1> <span>I'm Omkar Pomendkar</span>, Web Devloper based in INDIA.</h1>
      <p>I am a frontend devloper from Mumbai, India with 2 years of Experience  </p>
      <div className='hero-action'>
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
