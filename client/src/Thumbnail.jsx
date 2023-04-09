import React, { useState } from "react";

const Thumbnail = (props) => {
  

  return <img onClick={(e) => {
    props.click(props.num);

    const {border = "3px solid orange", opacity} = e.target.style;
    const style = {border, opacity};
  }} name={props.num} style={{}} className="image-product-thumbnail" src={`../images/image-product-${props.num}-thumbnail.jpg`} alt="product-thumbnail" />
}

export default Thumbnail;