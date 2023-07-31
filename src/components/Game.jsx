import React from 'react'
import "../Styles/Game.scss"

const Game = ({image , content}) => {
  return (
    <div className='gameContainer'>
        <img src={image} alt="" />
        <div className="content">
            <img src={content} alt="" className='image-content'/>
        </div>
    </div>
  )
}

export default Game