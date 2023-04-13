import React from "react";
import { LeftSection, RightSection } from "./MainSections";

const Main = (props) => {
  return (
    <div className="main-container">
      <LeftSection counter={props.counter} pickedImg={props.pickedImg} />
      <RightSection />
    </div>
  )
}

export default Main;