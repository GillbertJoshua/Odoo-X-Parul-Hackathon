import React from 'react';
import '../styles/home.css'; 
import {Card} from '../Components/Card';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home-page">
      {/* SCREEN 3: LANDING SECTION */}
      <section className="hero">
        <h1>Traveloop</h1>
        <div className="search-group">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Where do you want to go?" 
          />
          <select className="sort-btn">
            <option>Sort by</option>
            <option>Budget</option>
            <option>Date</option>
          </select>
        </div>
      </section>

      <div className="container">
        {/* TOP REGIONAL SELECTIONS */}
        <h2>Our Top Selected Destinations</h2>
        <div className="grid">
          <Card title="Japan" price="500" date="date" tag="TAGS" image="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg" />
          <Card title="Alaska" price="1000" date="date" tag="TAGS" image="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg" />
          <Card title="NEW Zealand" price="1000" date="date" tag="TAGS" image="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg" />
        </div>

        {/* PREVIOUS TRIPS */}
        <div className="trips-header">
          <h2>Previous Trips</h2>
          <Link to="/plan" className="plan-btn">+ Plan a Trip</Link>
        </div>
        
        <div className="grid">
                    <Card title="Japan" price="500" date="date" tag="TAGS" image="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg" />
          <Card title="Alaska" price="1000" date="date" tag="TAGS" image="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg" />
          <Card title="NEW Zealand" price="1000" date="date" tag="TAGS" image="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg" />

          
        </div>
      </div>
    </div>
  );
};

export default Home;
