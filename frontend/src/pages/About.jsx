import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-header section">
        <h1>Our Story</h1>
      </section>
      
      <section className="about-content section">
        <div className="about-image">
          {/* Placeholder for about page image */}
          <div className="image-placeholder"></div>
        </div>
        
        <div className="about-text">
          <p>
            Welcome to The BookCosy Book Club, a community born out of a passion for reading and sharing 
            book experiences. After finishing a book there is nothing better than discussing it with others.
          </p>
          
          <p>
            Having run a successful book club and participated in many others, I have collected hundreds of 
            reviews of the 100+ books we have read. To share our recommendations and to build a web-based 
            community where opinions and thoughts can be explored and shared. A bit like a passion and love for reading.
          </p>
          
          <p>
            Our goal is to create a cozy corner of the internet where book lovers can gather to discover new reads, 
            share their thoughts, and connect with like-minded individuals. The BookCosy is more than just a book club; 
            it's a community of readers who support each other's literary journeys.
          </p>
          
          <p>
            We read books from various genres - classics, modern fiction, mysteries, thrillers, 
            historical fiction, and more. Each month, we select a new book to read together and 
            discuss its themes, characters, and impact.
          </p>
          
          <p>
            Whether you're an avid reader looking for your next favorite book or someone who wants to 
            rediscover the joy of reading, we welcome you to join our community.
          </p>
          
          <div className="cta-buttons">
            <Link to="/contact" className="btn contact-btn">Get in Touch</Link>
            <Link to="/" className="btn browse-btn">Browse Books</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;