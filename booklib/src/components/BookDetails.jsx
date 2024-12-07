import React from 'react'
import "./BookDetails.css"
import cover_img from "../images/cover_not_found.png";
import { FaArrowLeft } from "react-icons/fa";
const BookDetails = () => {
  return (
    <section className="book-details">
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={cover_img} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24">Title: write title of book</span>
            </div>
            <div className="book-details-item description">
              <span>write description of book here this field will be large</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Subject Places: </span>
              <span className="text-italic">subject places</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Subject Times: </span>
              <span className="text-italic">subject item</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Subjects: </span>
              <span>subjects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetails