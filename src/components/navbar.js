import React, { useState } from 'react';
import Logo from "../assets/pizza.webp";
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/navbar.css";


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className='navbar'>
        <div className='leftside' >
            <img className='logo' src={Logo}/>
            
        </div>
        <div className='hamburgermenu' id={openLinks ? "open" : "closed"}>
         <div className='hiddenlinks'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/menu">Menu</Link>
            <Link className='link' to="/about">About Us</Link>
            <Link className='link' to="/contact">Contact</Link>
          </div>
        </div>
        <div className='rightside'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/menu">Menu</Link>
            <Link className='link' to="/about">About Us</Link>
            <Link className='link' to="/contact">Contact</Link>
            <button onClick={toggleNavbar} className='hamburger'>
            <ReorderIcon/>
            </button>

        </div>
    </div>
  )
}

export default Navbar