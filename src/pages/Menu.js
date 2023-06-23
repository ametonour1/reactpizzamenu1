import React from 'react'
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className='menu'>
        <h1>Our Menu</h1>
        <div className='menu__list'>
            {MenuList.map((menuItem,key) => {
                return <div><MenuItem key={key} image ={menuItem.image} name={menuItem.name} price ={menuItem.price} /></div>
            })}
        </div>
    </div>
  )
}

export default Menu