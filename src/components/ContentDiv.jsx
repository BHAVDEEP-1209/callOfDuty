import React from 'react'
import "../Styles/ContentDiv.scss"
import logo from "../assets/ghosts.svg";
import Card from './Card';
import News from './News';

const ContentDiv = () => {
  return (
    <div className='contentContainer'>
        <div className="left">
            <div className="header">
            {/* <img src=" alt="" /> */}
            <img src={logo} alt="" />
            <h1>BLACKCELL</h1>
            <p>Drop into Season 04 with the new animated skin 
            Operator IO, and other elite rewards.</p>            
            </div>
            <div className="footer">
                <Card image={"https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/v2023/touts/2023/06/COD-HP_Secondary-Tout_WZM.webp"}/>
                <Card image={"https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/v2023/touts/2023/06/COD-HP_Secondary-Tout_WZ.webp"}/>
            </div>
        </div>
        <div className="right">
          <News />
        </div>
    </div>
  )
}

export default ContentDiv