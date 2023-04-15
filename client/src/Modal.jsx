import React from "react";
import Thumbnail from "./Thumbnail";
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Modal } from '@mui/material';

const MyModal = ({ pickedImg, counter, close, navigation, modal }) => {
  const navigate = (e) => {
    const name = e.currentTarget.name; // ! Used currentTarget instead of target when accessing the name
    navigation(name);
  }
  
  const buttonStyle = {
    position: "absolute",
  }
  // ! Modal only takes 1 component
  return (
    <Modal style={{display: "flex", alignItems: "center", justifyContent: "center"}} disableEnforceFocus={true} onClose={close} open={modal}> 
    <div>
      <div>
        <div className="modal-close-container">
          <Fab onClick={() => {
            close();
          }} size="small" style={{backgroundColor: "transparent", boxShadow: "none"}}>
            <CloseIcon style={{color: "white"}} />
          </Fab>
        </div>
        <div className="modal-body">
          <img name="main" className="modal-image-product" src={`../images/image-product-${counter}.jpg`} alt="shoes" />
          <Fab name="previous" onClick={navigate} style={{...buttonStyle, left: -25}} size="medium">
            <KeyboardArrowLeftIcon fontSize="medium" />
          </Fab>
          <Fab name="next" onClick={navigate} style={{...buttonStyle, right: -25}} size="medium">
            <KeyboardArrowRightIcon fontSize="medium" />
          </Fab>
        </div>
      </div>
      <div className="modal-thumbnail-container">
        <Thumbnail click={pickedImg} num={1} />
        <Thumbnail click={pickedImg} num={2} />
        <Thumbnail click={pickedImg} num={3} />
        <Thumbnail click={pickedImg} num={4} />
      </div>
    </div>
  </Modal>
  )
}

export default MyModal;