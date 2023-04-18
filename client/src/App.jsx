import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [product, setProduct] = useState([]);
  const [badgeCount, setBadgeCount] = useState(0);

  const currentPrice = 125;

  const [item, setItem] = useState({
    name: "Fall Limited Edition Sneakers",
    image: "../images/image-product-1-thumbnail.jpg",
    price: `$${currentPrice}.00`,
    quantity: 0,
    total() {
      let total = currentPrice * this.quantity;
      return `$${total}.00`;
    }
  })

  const updateCounter = (name) => {
    setItem(prevValue => {
      return {
        ...prevValue,
        quantity: name === "up" ? prevValue.quantity + 1 : prevValue.quantity > 0 ? prevValue.quantity - 1 : prevValue.quantity
      }
    })
  }

  const updateCart = () => {
    setProduct(prevValue => {
      return [...prevValue, item]
    })
  }

  const deleteCart = (id) => {
    setProduct(prevValue => {
      return prevValue.filter((item, index) => {
        return index !== id;
      })
    })
  }

  
  console.log(product)
  
  return (
    <div>
      <Header setBadgeCount={setBadgeCount} badgeCount={badgeCount} deleteCart ={deleteCart} product={product} />;
      <Main badgeCount={badgeCount} setBadgeCount={setBadgeCount} updateCart={updateCart} updateCounter={updateCounter} quantity={item.quantity} />;
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

