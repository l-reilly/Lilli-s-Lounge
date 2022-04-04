import React from 'react'
import './header.css'
import plantCafe from '../../assets/plant cafe.webp'

const header = () => {
  return (
    <div className='header'>
    <div className='header-text'>
        <h1>Lilli's Lounge</h1>
        </div>
        <div className='header-image'>
            <img src={plantCafe} alt="plant cafe" />
            
        </div>
    </div>


  )
}

export default header