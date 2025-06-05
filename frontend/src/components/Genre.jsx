import React from 'react'
import BookCategories from './BookCategories'
import "../styles/Home.css"
const Genre = () => {
  return (
    <div>
        {/* Book Categories Section */} 
      <section className="find-books section">
        <h2 className="section-title">FIND YOUR NEXT FAVOURITE BOOK</h2>
    <BookCategories/>
      </section>
    </div>
  )
}

export default Genre;