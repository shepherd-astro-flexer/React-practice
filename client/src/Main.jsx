import React, { useState } from "react";
import { LeftSection, RightSection } from "./MainSections";
// import { Modal } from '@mui/material';

const Main = () => {
  // const [open, setOpen] = useState(false);

  // const modalOpen = () => {
  //   setOpen(true);
  // }

  // const modalClose = () => {
  //   setOpen(false);
  // }

  return (
    <div className="main-container">
      <LeftSection />
      <RightSection />
      {/* <div>
        <button onClick={modalOpen}>Open modal</button>
      </div>
      
      <Modal style={{display: "flex", alignItems: "center", justifyContent: "center"}} disableEnforceFocus={true} onClose={modalClose} open={open}>
        <div>
          <h1>eWEWEW</h1>
          <p>Hello</p>
        </div>
      </Modal> */}
    </div>
  )
}

export default Main;