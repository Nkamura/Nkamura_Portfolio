import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
        {/*He user require(path).default*/}
        <div className='footer-parent'>
            <img src={require ('../../../assets/Home/shape-bg.png')} 
            alt='Problem loading footer.'></img>
        </div>
    </div>
  )
}
