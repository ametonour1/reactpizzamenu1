import React from 'react'

function MenuItem({image, name, price}) {
  return (
    <div className='menu__item'>
        <div className='menu__item__image' style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>€{price}</p>
    </div>
  )
}

export default MenuItem