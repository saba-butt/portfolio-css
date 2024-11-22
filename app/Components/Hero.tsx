import Navbar from "./Navbar"
import React from "react"
import "../styles/hero.css"
import Image from "next/image"

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
    <Navbar/>
    <div className="hero-content">
    {/* <div className="hero-image">
          <img src="/mypic.jpg" alt="Hero" />
        </div> */}
<div className="hero-image">
  <Image src="/mypic.jpg" alt="mypic" width={500} height={600}/>
</div>
  <div className="hero-text">
<div className="hero-main">
  <p data-aos="zoom-in-up">I am</p>
  <p data-aos="zoom-in-up">Saba</p>
  <p data-aos="zoom-in-up">Butt</p>
</div>
  </div>

</div>
    </div>
  )
}

export default Hero
