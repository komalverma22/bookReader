import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/BookCategory.css';

function BookCategory() {
  const { categoryName } = useParams();
  
  // Mock book data - in a real app, this would be fetched from an API based on the category
  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.5,
      reviewCount: 21,
      coverColor: "#e2c9c9"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      rating: 4.3,
      reviewCount: 18,
      coverColor: "#c9d4e2"
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      rating: 4.7,
      reviewCount: 25,
      coverColor: "#d4e2c9"
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 4.2,
      reviewCount: 17,
      coverColor: "#e2d4c9"
    },
    {
      id: 5,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      rating: 4.4,
      reviewCount: 19,
      coverColor: "#d9c9e2"
    },
    {
      id: 6,
      title: "Wuthering Heights",
      author: "Emily Brontë",
      rating: 4.1,
      reviewCount: 16,
      coverColor: "#e2e2c9"
    }
  ];
  
  // Format category name for display
  const formatCategoryName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const displayName = formatCategoryName(categoryName);

  return (
    <div className="category-page">
      <section className="category-header section">
        <h1>{displayName} Books</h1>
        <p className="category-description">
          Explore our collection of {displayName.toLowerCase()} books, complete with reviews and recommendations.
        </p>
      </section>
      
      <section className="books-grid section">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <div 
              className="book-cover" 
              style={{ backgroundColor: book.coverColor }}
            >
              <span className="book-title">{book.title}</span>
            </div>
            <div className="book-details">
              <h3>{book.title}</h3>
              <p className="book-author">by {book.author}</p>
              <div className="book-rating">
                <span className="stars">{'★'.repeat(Math.floor(book.rating))}{'☆'.repeat(5 - Math.floor(book.rating))}</span>
                <span className="review-count">({book.reviewCount} reviews)</span>
              </div>
              <button className="btn view-btn">View Details</button>
            </div>
          </div>
        ))}
      </section>
      
      <div className="back-link">
        <Link to="/">← Back to Categories</Link>
      </div>
    </div>
  );
}

export default BookCategory;