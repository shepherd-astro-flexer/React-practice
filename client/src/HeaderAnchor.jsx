import React from "react";

const HeaderAnchor = (props) => {
  return (
    <div className="anchor-container">
      <a className="header-anchor" href="">{props.value}</a>
    </div>
  )
}

export default HeaderAnchor;