import React, { useEffect, useRef } from 'react'
import { init  }from 'ityped'


const Header = () => {
  const element = useRef()

  useEffect(() => {
    init(element.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings:[ "web Design", "web Development", "Facebook Ads", "Google Ads"],});
     
  },[])
  return (
    <div className='header-wrapper'>
     <div className='main-info'>
     <canvas></canvas>
     <h1>web development and websites promotions</h1>
     <p  ref={element} ></p>

     <a href='#' className='btn-main-offer'>contact me</a>
    </div>
      
    </div>
  )
}

export default Header
