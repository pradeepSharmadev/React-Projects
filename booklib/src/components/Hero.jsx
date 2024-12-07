import React from "react";
import "./Hero.css";
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Managing time productively and prioritizing tasks effectively is
            crucial for balancing complex work as a software developer. Here's a
            structured approach to help you achieve this!
          </p>
          <div className="search-form">
            <div className="container">
              <div className="search-form-content">
                <form className="search-form">
                  <div className="search-form-elem flex flex-sb bg-white">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="The Lost World ..."
                    />
                    <button
                      type="submit"
                      className="flex flex-c"
                    >
                      <FaSearch className="text-purple" size={32} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
