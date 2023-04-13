import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [productCounter, setProductCounter] = useState(1);

  const pickedThumbnail = (num) => {
    setProductCounter(num);
  }
  
  return (
    <div>
      <Header />;
      <Main counter={productCounter} pickedImg={pickedThumbnail} />;
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

