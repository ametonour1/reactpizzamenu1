import React from 'react'
import Chef from "../assets/pizzachef.png";
import "../styles/about.css";

function about() {
  return (
    <div className='about'>
        <div className='about__top' style={{backgroundImage:`url(${Chef})`}}></div>
        <div className='about__bottom'>
            <h1>Our Story</h1>
            <p>It’s a simple equation that keeps our customers coming back for more. Always fresh toppings and great service plus low, low prices equals great pizza. Here at The Alfonzo's Pizzeria, we strive to give our customers the best. We’re one of the few family-owned companies left that still truly care about our customers.
Our customers can count on prompt and quality service, high-quality food made from high-quality products with the freshest ingredients available and great prices. Whether you’re looking to feed your family or cater a gathering or lunch meeting, feeding a large group is both easy and affordable at Alfonzo's Pizzeria.
In business since 1987,The Alfonzo's Pizzeria a fast food restaurant offering delivery and take-out food service, commercial and institutional catering. </p>
        </div>
    </div>
  )
}

export default about