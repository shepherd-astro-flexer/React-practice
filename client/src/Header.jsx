import React, { useState } from "react";
import HeaderAnchor from "./HeaderAnchor";

const Header = () => {

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
          <img className="header-cart-icon" src="../images/icon-cart.svg" />
          <img className="image-avatar" src="../images/image-avatar.png" />
        </div>
    </header>
  )
}

export default Header;