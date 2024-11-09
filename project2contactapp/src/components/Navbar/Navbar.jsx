import React from 'react'
import "../Navbar/Navbar.modules.css"

const Navbar = () => {
  console.log
  return (
    <div className="Navbar">
      <nav className="nav-container ">
        <div>
          <img className="logo" src="images/logo.png" alt="logo" />
        </div>
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar