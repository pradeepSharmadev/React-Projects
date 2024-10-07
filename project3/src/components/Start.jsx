import React from 'react'
import dices from "/images/dices.png"
import Button from './Button'
import "./Start.modules.css"
import {Link} from "react-router-dom"

const Start = () => { 
  return (
    <div className="container">
      <div className="img">
        <img src={dices} alt="dice" />
      </div>
      <div className="headline">
        <div className="head">Dice Game</div>
        <Link to="/games">
          <div className="btn">
            <Button text="Start Now" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Start