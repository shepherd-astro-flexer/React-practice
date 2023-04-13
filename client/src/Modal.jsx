import React from "react";
import Thumbnail from "./Thumbnail";
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Modal = ({ pickedImg, counter, close }) => {
  
  const buttonStyle = {
    position: "absolute",
  }

  return (
    <div>
      <div>
        <div className="modal-close-container">
          <Fab onClick={() => {
            close();
          }} size="small" style={{backgroundColor: "transparent", boxShadow: "none"}}>
            <CloseIcon style={{color: "white"}}/>
          </Fab>
        </div>
        <div className="modal-body">
          <img name="main" className="modal-image-product" src={`../images/image-product-${counter}.jpg`} alt="shoes" />
          <Fab size="medium"  style={{...buttonStyle, left: -25}}>
            <KeyboardArrowLeftIcon fontSize="medium"  />
          </Fab>
          <Fab size="medium"  style={{...buttonStyle, right: -25}}>
            <KeyboardArrowRightIcon fontSize="medium"  />
          </Fab>
        </div>
        
      </div>
      <div className="modal-thumbnail-container">
        <Thumbnail click={pickedImg} num="1" />
        <Thumbnail click={pickedImg} num="2" />
        <Thumbnail click={pickedImg} num="3" />
        <Thumbnail click={pickedImg} num="4" />
      </div>
    </div>
  )
}

export default Modal;