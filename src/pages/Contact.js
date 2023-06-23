import React from 'react'
import PizzaOven from "../assets/pizzaoven.webp";
import "../styles/contact.css"

function Contact() {
  return (
    <div className='contact'>
        <div className='contact__leftside' style={{backgroundImage:`url(${PizzaOven})`}}></div>
        <div className='contact__rightside'>
            <h1>Contact Us</h1>
            <form id='contact__form' method='post'>
                <label htmlFor='name'>Name</label>
                <input name='name' placeholder='Example Name ' type="text"/>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='example@email.com ' type="email"/>
                <label htmlFor='message'>Message</label>
                <textarea rows="6" name='message' placeholder='Type your messgage' required></textarea>
                <button type='submit'>Send</button>

            </form>
        </div>
    </div>
  )
}

export default Contact