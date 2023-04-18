import React from "react";

const RenderCart = ({ item, deleteCart, id }) => {
  
  return (
    <div className="render-cart">
      <img className="item-image" src={item.image} alt="sneakers" />
      <div className="cart-prices">
        <p className="item-name">{item.name}</p>
        <p className="item-price">{`${item.price} x ${item.quantity}`} <strong className="item-total">{`${item.total()}`}</strong></p>
      </div>
      <img onClick={() => {
        deleteCart(id);
      }} className="item-delete" src="../images/icon-delete.svg" alt="delete-icon" />
    </div>
  )
}

export default RenderCart;