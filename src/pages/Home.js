import React from 'react'
import HomeIgm from '../assets/home.jpg'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div className='home' style={{backgroundImage: `url(${HomeIgm})`}}>
      <h1>Goran's Pizzeria</h1>
      <p>PIZZA TO FIT ANY TASTE</p>
      <button onClick={() => navigate('/menu')}>ORDER</button>
    </div>
  )
}
