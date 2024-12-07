import React from "react";
import "./Items.css";
import cover_img from "../images/cover_not_found.png";
const Book = () => {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img className="w-[56%]" src={cover_img} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <div>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>Book title comes</span>
          </div>
        </div>
        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author: </span>
          <span>Bookies sons</span>
        </div>

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Total Editions: </span>
          <span>1st edtion of book </span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">First Publish Year: </span>
          <span>2023</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
