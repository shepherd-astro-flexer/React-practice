import React, { useState } from "react";
import HeaderAnchor from "./HeaderAnchor";
import Cart from "./Cart";

const Header = ({ product, deleteCart, badgeCount, setBadgeCount }) => {
  return (
    <header>
        <div className="header-left-section">
          <img className="logo" src="../images/logo.svg" />
          <HeaderAnchor value="Collections" />
          <HeaderAnchor value="Men" />
          <HeaderAnchor value="Women" />
          <HeaderAnchor value="About" />
          <HeaderAnchor value="Contact" />
        </div>
        <div className="header-right-section">
          <Cart setBadgeCount={setBadgeCount} badgeCount={badgeCount} deleteCart={deleteCart} product={product} />
          <img className="image-avatar" src="../images/image-avatar.png" />
        </div>
    </header>
  )
}

export default Header;
