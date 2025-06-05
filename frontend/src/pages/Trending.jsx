"use client"

import { useState, useEffect } from "react"
import "../styles/Trending.css"

function Trending() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Sample book datal
  const trendingBooks = [
    {
      id: 1,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      rating: 4.8,
      image: "https://i.pinimg.com/736x/f9/55/09/f955092546ca91cac2a64e0a31ff7a32.jpg",
      price: "$12.99",
      category: "Thriller"
    },
    {
      id: 2,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      rating: 4.6,
      image: "https://i.pinimg.com/736x/96/16/3e/96163ed69acef92e4efaea8cf1fc3bd1.jpg",
      price: "$14.99",
      category: "Fiction",
    },
    {
      id: 3,
      title: "The Seven Husbands", 
      author: "Taylor Jenkins Reid",
      rating: 4.7,
      image: "https://i.pinimg.com/736x/d2/b1/45/d2b145c0ba801d660b63c9b97a670eed.jpg",
      price: "$13.99",
      category: "Romance",
      
    },
    {
      id: 4,
      title: "Atomic Habits",
      author: "James Clear",
      rating: 4.9,
      image: "https://i.pinimg.com/736x/20/d1/a6/20d1a65703a999cd0b39f87d7bb41c1d.jpg",
      price: "$15.99",
      category: "Self-Help",
    },
    {
      id: 5,
      title: "The Midnight Library",
      author: "Matt Haig",
      rating: 4.5,
      image: "https://i.pinimg.com/736x/ea/87/e5/ea87e5dd6bd36ccea9299fc024f08c09.jpg",
      price: "$11.99",
      category: "Fiction",
    },
    {
      id: 6,
      title: "Educated",
      author: "Tara Westover",
      rating: 4.8,
      image: "https://i.pinimg.com/736x/92/ef/98/92ef981e0920fda5fbbf6cd30dd21b79.jpg",
      price: "$16.99",
      category: "Memoir",
    },
  ]

  const newReleases = [
    {
      id: 7,
      title: "The Thursday Murder Club",
      author: "Richard Osman",
      rating: 4.4,
      image: "https://i.pinimg.com/736x/4a/8e/3b/4a8e3bea8cdcc9764fa147f2e235984d.jpg",
      price: "$13.99",
      category: "Mystery",
    },
    {
      id: 8,
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      rating: 4.3,
      image: "https://i.pinimg.com/736x/37/ad/d6/37add6d261d891498e3b73260343bd3c.jpg",
      price: "$14.99",
      category: "Sci-Fi",
    },
    {
      id: 9,
      title: "The Sanatorium",
      author: "Sarah Pearse",
      rating: 4.2,
      image: "https://i.pinimg.com/736x/28/c2/64/28c264eb0adbc7d7cace075f01868143.jpg",
      price: "$12.99",
      category: "Thriller",
    },
    {
      id: 10,
      title: "The Invisible Life",
      author: "Martha Hall Kelly",
      rating: 4.6,
      image: "https://i.pinimg.com/736x/b8/1d/6e/b81d6e1df2c760b2d986740238a086c3.jpg",
      price: "$15.99",
      category: "Historical",
    }
    ,
    {
      id: 11,
      title: "The Invisible Life",
      author: "Martha Hall Kelly",
      rating: 4.6,
      image: "https://i.pinimg.com/736x/b8/1d/6e/b81d6e1df2c760b2d986740238a086c3.jpg",
      price: "$15.99",
      category: "Historical",
    }
  ]

  const bestSellers = [
    {
      id: 11,
      title: "It Ends with Us",
      author: "Colleen Hoover",
      rating: 4.7,
      image: "https://i.pinimg.com/736x/2b/67/60/2b6760353435b8ef1a3437385a381039.jpg",
      price: "$13.99",
      category: "Romance",
    },
    {
      id: 12,
      title: "The Guest List",
      author: "Lucy Foley",
      rating: 4.5,
      image: "https://i.pinimg.com/736x/d5/47/1c/d5471cfa6fc46ad0dca76006b659290b.jpg",
      price: "$12.99",
      category: "Thriller",
    },
    {
      id: 13,
      title: "Circe",
      author: "Madeline Miller",
      rating: 4.8,
      image: "https://i.pinimg.com/736x/e9/0b/cf/e90bcf9014738843a2ffb0b9b24939a0.jpg",
      price: "$14.99",
      category: "Fantasy",
    },
    {
      id: 14,
      title: "The Alchemist",
      author: "Paulo Coelho",
      rating: 4.9,
      image: "https://i.pinimg.com/736x/7a/3b/76/7a3b76f18169db5e9180c0b745050223.jpg",
      price: "$11.99",
      category: "Philosophy",
    },
  ]

  // Auto-slide for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trendingBooks.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [trendingBooks.length])

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star filled">
          ★
        </span>,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>,
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          ★
        </span>,
      )
    }

    return stars
  }

const BookCard = ({ book, index }) => (
  <div className="book-card" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="book-image-container">
      <img src={book.image || "/placeholder.svg"} alt={book.title}  />
  
    <span className="book-category">{book.category}</span>
     </div>
    <div className="book-info">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">by {book.author}</p>
      <div className="book-rating">
        {renderStars(book.rating)}
        <span className="rating-number">({book.rating})</span>
      </div>
      <button className="quick-view-btn">Quick View</button>
    </div>
  </div>
)

  return (
    <div className="trending-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Trending Books
            </h1>
            <p className="hero-subtitle">Discover the most popular books that everyone is talking about</p>
            <button className="explore-btn">Explore Collection</button>
          </div>
          <div className="hero-books">
            <div className="hero-book-slider">
              {trendingBooks.map((book, index) => (
                <div
                  key={book.id}
                  className={`hero-book ${index === currentSlide ? "active" : ""}`}
                  style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
                >
                  <img src={book.image || "/placeholder.svg"} alt={book.title} />
                  <div className="hero-book-info">
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <div className="hero-rating">{renderStars(book.rating)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hero-dots">
              {trendingBooks.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Books Section */}
      {/* <section className="books-section">
        <div className="section-header">
          <h2 className="section-title">🔥 Trending Now</h2>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="books-container">
          <div className="books-slider">
            {trendingBooks.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </div>
      </section> */}

      {/* New Releases Section */}
      <div className="books-section">
        <div className="section-header">
          <h2 className="section-title">New Releases</h2>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="books-container">
          <div className="books-slider">
            {newReleases.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <section className="books-section">
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="books-container">
          <div className="books-slider">
            {bestSellers.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Books Available</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5K+</div>
            <div className="stat-label">Happy Readers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.8</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Trending
