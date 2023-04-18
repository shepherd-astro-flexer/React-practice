import React from "react";
import MainSection from "./MainSections";

const Main = ({ quantity, updateCounter, updateCart, setBadgeCount, badgeCount }) => {
  return (
    <div>
      <MainSection badgeCount={badgeCount} setBadgeCount={setBadgeCount} updateCart={updateCart} updateCounter={updateCounter} quantity={quantity} />
    </div>
  )
}

export default Main;