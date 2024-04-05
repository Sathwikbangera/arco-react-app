/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Link } from 'react-scroll';
import dark_arrow from '../../assets/dark-arrow.png';
import '../../index.css';
import './Hero.css';
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text ">
        <h1>We discover faster solution for a better world</h1>
        <p>Making India's AnnaDaata happy!</p>
        <button className='btn'><Link to ='program' smooth={true} offset={-260} duration={500}>Explore more <img src={dark_arrow} alt ="" /></Link> </button>
      </div>
    </div>
  )
}

export default Hero
