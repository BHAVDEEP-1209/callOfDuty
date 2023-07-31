import React from 'react'
import "../Styles/News.scss"
import news from "../assets/MWII_S05_ANNOUNCEMENT-TOUT-FINAL.jpg"

const News = () => {
  return (
    <div className='newsContainer'>
        <h1>NEWS</h1>
        <hr className='line'/>
        <div className="mainNews">
            <img src={news} alt=""/>
            <span className='newInfo'>
            Modern Warfare II and Warzone Season 05: Content Drop
            </span>
        </div>
        <div className="listNews">

            <div className="newsItem">
                <img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-7-HEAT-WAVE-TOUT-TXL.jpg/jcr:content/renditions/cq5dam.thumbnail.319.319.png" alt="" />
                <div className="rightNewsInfo">
                    <h1>Introducing Call of Duty: Mobile Season 7 — Heat Wave</h1>
                    <p>6 days ago</p>
                </div>
            </div>
            <div className="newsItem">
                <img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-7-HEAT-WAVE-TOUT-TXL.jpg/jcr:content/renditions/cq5dam.thumbnail.319.319.png" alt="" />
                <div className="rightNewsInfo">
                    <h1>Introducing Call of Duty: Mobile Season 7 — Heat Wave</h1>
                    <p>6 days ago</p>
                </div>
            </div>
            <div className="newsItem">
                <img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-7-HEAT-WAVE-TOUT-TXL.jpg/jcr:content/renditions/cq5dam.thumbnail.319.319.png" alt="" />
                <div className="rightNewsInfo">
                    <h1>Introducing Call of Duty: Mobile Season 7 — Heat Wave</h1>
                    <p>6 days ago</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default News