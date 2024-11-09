import React from 'react'
import "./Button.modules.css"

const Button = ({text}) => {
  return (
    <div className="button-container">
        <button>{text}</button>
    </div>
  )
}

export default Button