import React, { useState } from "react";
import RenderCart from "./RenderCart";
import Badge from '@mui/material/Badge';

const Cart = ({ product, deleteCart, badgeCount, setBadgeCount }) => {
  const [cart, setCart] = useState(false);
  
  const showCart = () => {
    setCart(!cart ? true : false);

    setBadgeCount(!cart ? badgeCount :0);
  }

  return (
    <div className="cart-container">
      <Badge badgeContent={!cart ? badgeCount :0} color="primary">
        <img onClick={showCart} className="header-cart-icon" src="../images/icon-cart.svg" />
      </Badge>
      {cart && <div className="cart">
        <div className="cart-text">Cart</div>
        {product.length > 0 ? <div className="cart-body">
          {product.map((item, index) => {
            return <RenderCart deleteCart={deleteCart} item={item} key={index} id={index} /> 
          })}
        </div> : <div className="empty-text">Your cart is empty.</div>}
        {product.length > 0 && <button className="checkout-button">Checkout</button>}
      </div>}
    </div>
  )
}

export default Cart;