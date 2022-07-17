import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import styled from 'styled-components'
import Item from "./TrendingCard";



import LandingCard from './LandingCard'
import Landingimage from '../assets/images/landingimg.png'
import '../assets/css/carousel.css'

// import Carousel from 'react-bootstrap/Carousel';
const breakPoints = [
  { width: 1, itemsToShow: 4 },
  { width: 550, itemsToShow: 4},
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 }
];  



const TrendingCarousel=()=>{
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  

  return (
    <div className="App">
      <div className="controls-wrapper">
        {/* <button onClick={removeItem}>Remove Item</button> */}
        {/* <button onClick={addItem}>Add Item</button> */}
      </div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default TrendingCarousel