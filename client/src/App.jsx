import React, { useState } from "react";
import Header from "./Header";
import Thumbnail from "./Thumbnail";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import './component-styles.css'; 

function App() {
  const [productCounter, setProductCounter] = useState(1);
  // const [picked, setPicked] = useState({});

  const pickedThumbnail = (num) => {
    setProductCounter(num);
  }
  
  return (
    <div>
      <Header />;
      <div className="left-section">
        <img name="main" className="image-product" src={`../images/image-product-${productCounter}.jpg`} alt="shoes" />
        <div className="thumbnail-container">
          <Thumbnail click={pickedThumbnail} num="1" />
          <Thumbnail click={pickedThumbnail} num="2" />
          <Thumbnail click={pickedThumbnail} num="3" />
          <Thumbnail click={pickedThumbnail} num="4" />
        </div>
      </div>
      <div className="right-section">
        <h6 className="company-text">SNEAKER COMPANY</h6>
        <h1 className="title-text">Fall Limited Edition Sneakers</h1>
        <p className="body-text">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className="current-price-container">
          <h2 className="current-price">$125.00</h2>
          <h5 className="price-off">50%</h5>
        </div>
        <h5 className="original-price">$250.00</h5>
        <div className="spinner-container">
          {/* <button className="spinner-button"><RemoveIcon /></button> */}
          <Button className="spinner-button">-</Button>
          <p>0</p>
          <Button className="spinner-button">+</Button>
          
          {/* <button className="spinner-button"><AddIcon /></button> */}
        </div>
        <button className="add-to-cart-button">
          <img className="add-to-cart-icon" src="../images/icon-cart2.svg" alt="cart" />
          <p className="add-to-cart-text">Add to cart</p>
        </button>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  );
}

export default App;

// function navigation(e) {
  //   const name = e.target.name;

  //   if (name === "next") {
  //     setProductCounter(productCounter < 4 ? productCounter + 1 : productCounter);
  //   } else {
  //     setProductCounter(prevValue => {
  //       return productCounter !== 1 ? prevValue - 1 : productCounter;
  //     })
  //   }
  // }

