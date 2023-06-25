import React from 'react'
import '../styles/Contact.css'
import ContactImg from '../assets/contact.jpg'

export const Contact = () => {
  return (
    <div className='contactContainer'>
      <div className='leftSide' 
      style={{backgroundImage: `url(${ContactImg})`}}
      >
      </div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form method='POST'>
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Your Full Name' type='text'/>
          <label htmlFor='email'>Email Address</label>
          <input name='email' placeholder='Your Email' type='email'/>
          <label htmlFor='message'>Message</label>
          <textarea 
          rows='6' 
          placeholder='Your Message' 
          required
          /></form>
          <button className='contactBtn' type='submit'>Send</button>
      </div>
    </div>
  )
}
