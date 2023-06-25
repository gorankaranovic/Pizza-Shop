import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'

export const Navbar = () => {
  const [ toggleBtn, setToggleBtn] = useState(false)
  
  const toggleBttn = () => {
    setToggleBtn(!toggleBtn)
  }

  const navigate = useNavigate()

  useEffect(() => {
    setToggleBtn(false)
  }, [navigate])

  return (
    <div className='navContainer'>
      <div className='hiddenNav' id={toggleBtn ? 'open' : 'close'}>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
      </div>
      <div className='nav'>
        <div className='logo'>
          <img src={Logo} />
        </div>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <button className='btnNav' onClick={() => toggleBttn()}><ReorderIcon/></button>
      </div>
    </div>
  )
}
