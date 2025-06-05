import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookCategories.css';

function BookCategories() {
  // Category data - in a real app, this would likely come from an API or database
  const categories = [
    { id: 1, name: 'Classic', slug: 'classic' ,image: "https://i.pinimg.com/736x/85/6f/04/856f04e7a3c1c5eb466821a9613c71fd.jpg"},
    { id: 2, name: 'Cultural Fiction', slug: 'cultural-fiction',image:"https://i.pinimg.com/736x/d0/2e/c2/d02ec2421f4e613783fa09d14854993f.jpg" },
    { id: 3, name: 'Fantasy', slug: 'fantasy',image: "https://i.pinimg.com/736x/1a/d9/2f/1ad92f151a8714c638153e917b422fb8.jpg" },
    { id: 4, name: 'Gothic', slug: 'gothic',image:"https://i.pinimg.com/736x/91/e3/54/91e354e8be5470569454fadbda93b171.jpg" },
    { id: 5, name: 'Historical Fiction', slug: 'historical-fiction',image:"https://i.pinimg.com/736x/5f/7f/0e/5f7f0ed9e5c06aadc3e6d96ff51936f5.jpg" },
    { id: 6, name: 'Mystery', slug: 'mystery',image:"https://i.pinimg.com/736x/e2/45/61/e245617d71feaba52e68954d4f8da48f.jpg" },
    { id: 7, name: 'Psychological', slug: 'psychological',image:"https://i.pinimg.com/736x/6e/08/cb/6e08cba8d9519612f325a6c4f080450f.jpg" },
    { id: 8, name: 'Romance', slug: 'romance',image:"https://i.pinimg.com/736x/35/6c/64/356c64580f6f83fe97b93645e1a59bc1.jpg" },
    { id: 9, name: 'Thriller', slug: 'thriller',image:"https://i.pinimg.com/736x/0a/a3/62/0aa36265bcede199afbbd8ee9983433b.jpg" },
  ];

  return (
    <div className="book-categories">
      <div className="categories-grid">
        {categories.map(category => (
          <Link 
            to={`/category/${category.slug}`} 
            key={category.id} 
            className="category-item"
          >
           <div className="category-box">
  <img src={category.image} alt={category.name} className="category-image" />
  <div className="category-badge"></div>
  <h3>{category.name}</h3></div>

              {/* This would be replaced with actual book images in a real app */}
              {/* <div className="book-shelf">
                <div className="shelf-book"></div>
                <div className="shelf-book"></div>
                <div className="shelf-book"></div>
                <div className="shelf-book"></div> 
              </div> */}
         
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BookCategories;