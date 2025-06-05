import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import CurrentReading from '../components/CurrentReading';
import BookCategories from '../components/BookCategories';
import '../styles/Home.css';
import Trending from './Trending';
import Contact from './Contact';
function Home() {
    const navigate = useNavigate();
      const goToContact = () => {
    navigate('/contact'); //  step 2
  };
  return (
    <div className="home">
      {/* Welcome Section */}
      
      <section className="welcome section">
        <div className="welcome-content">
          <h2>Welcome to the bookReader</h2>
          <p>
            An online book club community based in the UK,
            sharing opinions and reviews on our latest reads and offering book
            recommendations for book clubs.
          </p>
        </div>
      </section>
      
      {/* Currently Reading Section */}
      {/* <CurrentReading /> */}
      <Trending />

         {/* Book Categories Section */}
      {/* <section className="find-books section">
        <h2 className="section-title">FIND YOUR NEXT FAVOURITE BOOK</h2>
        <BookCategories />
      </section> */}
      {/* About Section */}
      <section className="about-section section">
        <div className="about-content">
          <div className="about-text">
            <p>
              After finishing a book there is nothing better than discussing 
              it with others. Having run a successful book club and 
              participated in many others, I have collected hundreds of 
              reviews of the 100+ books we have read. To share our 
              recommendations and to build a web-based community 
              where opinions and thoughts can be explored and shared. A 
              bit like a passion and love for reading.
            </p>
            <button className="btn read-story-btn">Read Our Story</button>
          </div>
          <div className="about-image">
            {/* Placeholder for about section image */}
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>
      
   
      
      {/* Contact Section Preview */}
      <section className="contact-preview section">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-message">
          We would love to hear from you!
          If you are an author wishing to send us your book to review.
        </p>
        <button onClick={goToContact} className="btn contact-btn">Contact Us Here</button>
         
       
      </section>
    </div>
  );
}

export default Home;