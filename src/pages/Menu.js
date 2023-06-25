import React from 'react'
import { MenuList } from '../helpers/MenuList'
import '../styles/Menu.css'

export const Menu = () => {
  return (
    <div className='menuContainer'>
      <h1>Our Menu</h1>
      <div className='menu'>
          {MenuList.map((item) => {
            return(
              <div className='menuItem'>
                  <div className='imgMenuItem' style={{backgroundImage: `url(${item.image})`}}></div>
                  <h1>{item.name}</h1>
                  <p>${item.price}</p>
              </div>
            ) 
          })}

      </div>
    </div>
  )
}
