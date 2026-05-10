import React from 'react';
import '../styles/card.css';
export const Card = ({ title, price, date, tag, image }) => {
  return (
    <div 
      className="full-bg-card" 
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="card-overlay">
        <span className="card-tag">{tag}</span>
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <div className="card-details">
            <span>{date}</span>
            <span className="card-price">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
