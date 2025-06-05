import React from 'react';
import '../styles/CurrentReading.css';

function CurrentReading() {
  return (
    <section className="current-reading section">
      <h2 className="section-title">WE ARE CURRENTLY READING</h2>
      <div className="book-display">
        <div className="book-cover">
          {/* Placeholder for book cover - in a real app, this would be an image */}
          <div className="cover-placeholder">
            <span>11.22.63</span>
            <span>By Stephen King</span>
          </div>
        </div>
        
        <div className="book-info">
          <h3>11.22.63</h3>
          <h4>By Stephen King</h4>
          
          <p className="reading-date">
            We will review this book on the 1st June 2025 and on our blog.
            So in the meantime grab yourself a copy and connect with us
            on social media to share your thoughts!
          </p>
          
          <div className="social-links">
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📷</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentReading;