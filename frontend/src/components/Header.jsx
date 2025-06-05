

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/Header.css"
import bookImage from "../assets/images/book-beige.jpg"
import bookImage1 from "../assets/images/book-beige5.jpg"
import bookImage2 from "../assets/images/book-beige2.jpg"
import bookImage3 from "../assets/images/book-beige3.jpg"
import bookImage4 from "../assets/images/book-beige4.jpg"
import bookImage5 from "../assets/images/book-beige10.jpg"
import bookImage6 from "../assets/images/book-beige6.jpg"
import bookImage7 from "../assets/images/book-beige7.jpg"
import bookImage8 from "../assets/images/book-beige8.jpg"
import bookImage9 from "../assets/images/book-beige9.jpg"
import bookImage10 from "../assets/images/book-beige11.jpg"
import bookImage11 from "../assets/images/book-beige12.jpg"
import bookImage12 from "../assets/images/book-beige13.jpg"
import bookImage13 from "../assets/images/book-beige14.jpg"
import bookImage14 from "../assets/images/book-beige15.jpg"
import bookImage15 from "../assets/images/book-beige16.jpg"
import bookImage16 from "../assets/images/book-beige17.jpg"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll event to make navbar fixed
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu when clicking on overlay
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const books = [
    bookImage,
    bookImage9,
    bookImage2,
    bookImage6,
    bookImage7,
    bookImage3,
    bookImage5,
    bookImage4,
    bookImage8,
    bookImage1,
    bookImage16,
    bookImage10,
    bookImage11,
    bookImage12,
    bookImage16,
    bookImage14,
    bookImage15,
    bookImage13,
    bookImage10,
  ]

  // Duplicate books for seamless scrolling
  const allBooks = [...books, ...books]

  return (
    <>
      <header className="header">
        <div className="book-carousel">
          <div className="book-images">
            {allBooks.map((book, index) => (
              <div key={index} className="book-image">
                <img src={book || "/placeholder.svg"} alt={`Book ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="logo-container">
          <Link to="/">
            <div className="logo">
              <h1>The bookReader</h1>
              <div className="book-club">
                <span>BOOK</span>
                <span className="teapot-icon">
                  <img src="https://i.pinimg.com/736x/23/c3/87/23c387869c33a8fd31e9c8eea1009797.jpg" alt="" />
                </span>
                <span>CLUB</span>
              </div>
            </div>
          </Link>
        </div>

        <nav className={`main-nav ${isScrolled ? "fixed-nav" : ""}`}>
          <div className="nav-container">
            {/* Brand name on left */}
            <div className="nav-spacer">bookReader</div>
            
            {/* Hamburger menu button (visible on mobile) */}
            <button 
              className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </button>

            {/* Desktop Navigation links */}
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/genre">Genre</Link>
              </li>
              <li>
                <Link to="/contact">AudioBooks</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            
            {/* Icons on the right */}
            <div className="nav-icons">
              <button className="icon-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="book-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </button>
              <button className="icon-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="book-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </button>
              <button className="icon-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="book-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-menu-title">Menu</div>
          <button className="close-menu" onClick={closeMobileMenu} aria-label="Close menu">
            ×
          </button>
        </div>
        
        <div className="mobile-nav-links">
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/genre" onClick={handleLinkClick}>Genre</Link>
            </li>
            <li>
              <Link to="/audiobooks" onClick={handleLinkClick}>AudioBooks</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="mobile-menu-icons">
          <button className="icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="book-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </button>
          <button className="icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="book-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </button>
          <button className="icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="book-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header