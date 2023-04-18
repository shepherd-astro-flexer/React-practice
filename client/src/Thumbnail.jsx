import React, { useState } from "react";

const Thumbnail = (props) => {
  return <img onClick={() => {
    props.click(props.num);
  }} className="image-product-thumbnail" src={`../images/image-product-${props.num}-thumbnail.jpg`} alt="product-thumbnail" />
}

export default Thumbnail;