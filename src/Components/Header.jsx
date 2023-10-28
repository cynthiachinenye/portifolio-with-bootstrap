import React from 'react'
import Typed from "react-typed"

const Header = () => {
  return (
    <div className='header-wrapper'>
     <div className='main-info'>
     <h1>web development and websites promotions</h1>
     <Typed className="typed-text"
     strings={{"web Design", "web Development", "Facebook Ads SMM", "Google Ads"}}/>
     </div>
      
    </div>
  )
}

export default Header
