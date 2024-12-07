import React from 'react'
import Book from './Book';
import "./Items.css"


const Items = () => {
  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>Result title</h2>
        </div>
        <div className="booklist-content grid">
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </section>
  );
}

export default Items