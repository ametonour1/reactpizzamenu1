import React from 'react'
import "../styles/home.css"
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizzatopphoto.webp";

function Home() {
  return (
    <div className='home'>
      <div className='header__container' style={{backgroundImage:`url(${BannerImage})`}}>
        <h1>Alfonzo's Pizzaria</h1>
        <p>"We did it our way"</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home