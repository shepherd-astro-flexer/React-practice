import React, { useState } from "react";
import Thumbnail from "./Thumbnail";
import MyModal from "./Modal";

const MainSection = ({ updateCart, quantity, updateCounter, setBadgeCount, badgeCount }) => {
  const [modal, setModal] = useState(false);
  const [productCounter, setProductCounter] = useState(1);
  
  const callUpdateCounter = (e) => {
    const name = e.target.name;

    updateCounter(name);
  }

  const pickedThumbnail = (num) => {
    setProductCounter(num) // ! Forgot to change the value to a number on the 'modal' component We set the 'num' variable to be a number because it returns a string value of a number, and that is what's causing the crash, so need to be AWARE of that.
  };

  const openModal = () => (setModal(true));
  
  const closeModal = () => (setModal(false));
 
  const navigateButton = (name) => {
    setProductCounter(() => {
      if (name === "next") return productCounter < 4 ? productCounter + 1 : productCounter;
      return productCounter > 1 ? productCounter - 1 : productCounter;
    })
  }
  
  return (
    <div className="main-container">
      <div className="left-section">
        <img onClick={openModal} name="main" className="image-product" src={`../images/image-product-${productCounter}.jpg`} alt="shoes" />
        <MyModal modal={modal} navigation={navigateButton} close={closeModal} pickedImg={pickedThumbnail} counter={productCounter} />
        <div className="thumbnail-container">
          <Thumbnail click={pickedThumbnail} num={1} />
          <Thumbnail click={pickedThumbnail} num={2} />
          <Thumbnail click={pickedThumbnail} num={3} />
          <Thumbnail click={pickedThumbnail} num={4} />
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
          <button name="down" onClick={callUpdateCounter} className="spinner-button-1 add-price">&minus;</button>
            <p className="counter add-price">{quantity}</p>
          <button name="up" onClick={callUpdateCounter} className="spinner-button-2 add-price">+</button>
          </div>
          <button onClick={() => {
              updateCart();

              setBadgeCount(badgeCount + 1);
            }} className="add-to-cart-button">
            <img className="add-to-cart-icon" src="../images/icon-cart2.svg" alt="cart" />
            <p className="add-to-cart-text">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  )
}

// const RightSection = () => {
  
//   return (
    
//   )
// }

export default MainSection;