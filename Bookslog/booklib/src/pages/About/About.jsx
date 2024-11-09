import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const about = () => {
  return(
    <section className="about">
        <div className="container">
            <div className="section-title">
                <h2>About</h2>
            </div>
            <div className="about-content">
                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="about-text">
                    <h2 className="about-title fs-26 ls-1">About BookLog</h2>
                    <p className="fs-17">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto vitae dolorem in a voluptate voluptatem alias quibusdam eum, deleniti magnam cum debitis, sit ratione quidem, inventore quisquam voluptates! Numquam, cupiditate?</p>
                    <p className="fs-17">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto vitae dolorem in a voluptate voluptatem alias quibusdam eum, deleniti magnam cum debitis, sit ratione quidem, inventore quisquam voluptates! Numquam, cupiditate?</p>
                </div>
            </div>
        </div>
    </section>
  )
};

export default about;
