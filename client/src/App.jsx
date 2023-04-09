import React, { useState } from "react";
import Header from "./Header";
import Thumbnail from "./Thumbnail";

function App() {
  const [productCounter, setProductCounter] = useState(1);
  const [picked, setPicked] = useState({});

  const pickedThumbnail = (num) => {
    console.log(num);
    setProductCounter(num);



    // setPicked(prevValue => {
    //   return 
    // })
  }
  
  return (
    <div>
      <Header />;
      <div className="left-section">
        <img name="main" className="image-product" src={`../images/image-product-${productCounter}.jpg`} alt="shoes" />
        <div className="thumbnail-container">
          <Thumbnail picked={picked} click={pickedThumbnail} num="1" />
          <Thumbnail picked={picked} click={pickedThumbnail} num="2" />
          <Thumbnail picked={picked} click={pickedThumbnail} num="3" />
          <Thumbnail picked={picked} click={pickedThumbnail} num="4" />
        </div>
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

  {/* <button name="next">next</button>
      <button name="previous">previous</button> */}
