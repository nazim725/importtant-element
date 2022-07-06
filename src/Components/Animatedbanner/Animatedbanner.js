import React from 'react'
import './Animatedbanner.css'
import bg from '../../images/background.png'
import logo from '../../images/logo.png'
import menu from '../../images/menu.png'
import fb from '../../images/fb.png'
import ig from '../../images/ig.png'
import tw from '../../images/tw.png'
import share from '../../images/share.png'
import info from '../../images/info.png'
import bubble from '../../images/bubble.png'

const Animatedbanner = () => {
  return (
    <div>
      <div className="hero">
        <div className="navbar">
          <img src={logo} alt="" className="logo" />
          <button type="button"> Sign Up</button>
        </div>
        <div className="content">
          <small>Welcome to Our</small>
          <h1>
            World's <br /> Creative Studio
          </h1>
          <button type="button"> Take a Tour</button>
        </div>
        <div className="side-bar">
          <img src={menu} alt="" className="menu" />
          <div className="social-links">
            <img src={fb} alt="" />
            <img src={ig} alt="" />
            <img src={tw} alt="" />
          </div>
          <div className="useful-links">
            <img src={share} alt="" />
            <img src={info} alt="" />
          </div>
        </div>
        <div className="bubbles">
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
         
        </div>
      </div>
    </div>
  )
}

export default Animatedbanner
