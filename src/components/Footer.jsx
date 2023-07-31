import React from 'react'
import "../Styles/Footer.scss"
import first from "../assets/esrb-privacy.jpg"
import second from "../assets/cod-hub-esrb-en.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="headerContent">
            <img src={first} alt="" className='img1'/>
            <img src={second} alt="" className='img2'/>
        </div>
        <div className="footerContent">
            <p>
            © 2023 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY, CALL OF DUTY LEAGUE, CALL OF DUTY MODERN WARFARE, MODERN WARFARE, CALL OF DUTY BLACK OPS, CALL OF DUTY WARZONE, WARZONE and CALL OF DUTY VANGUARD are trademarks of Activision Publishing, Inc. All other trademarks and trade names are the property of their respective owners.
            </p>
        </div>
    </div>
  )
}

export default Footer