import React from 'react'
import './Games.css'
import '.././Resources.css'
import Cat from '../../../assets/cat2.png'

const Games = () => {
  return (
    <div className="games">

        <h1 className="games-develop">under development</h1>
        <img src={Cat} alt="" className="games-banner"/>
        <div className="games-description">
            <p>content coming soon</p>
        </div>

    </div>
  )
}

export default Games
