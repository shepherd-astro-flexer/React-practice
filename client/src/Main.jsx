import React from "react";
import Thumbnail from "./Thumbnail";

const Main = (props) => {
  return (
    <div className="main-container">
        <div className="left-section">
          <img name="main" className="image-product" src={`../images/image-product-${props.counter}.jpg`} alt="shoes" />
          <div className="thumbnail-container">
            <Thumbnail click={props.pickedImg} num="1" />
            <Thumbnail click={props.pickedImg} num="2" />
            <Thumbnail click={props.pickedImg} num="3" />
            <Thumbnail click={props.pickedImg} num="4" />
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
          <div className="spinner-and-add-cart-container">
            <div className="spinner-container">
            <button className="spinner-button-1 add-price">&minus;</button>
              <p className="counter add-price">0</p>
            <button className="spinner-button-2 add-price">+</button>
            </div>
            <button className="add-to-cart-button">
              <img className="add-to-cart-icon" src="../images/icon-cart2.svg" alt="cart" />
              <p className="add-to-cart-text">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Main;