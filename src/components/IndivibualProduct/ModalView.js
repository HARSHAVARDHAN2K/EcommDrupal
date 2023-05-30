import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

function ModalView ()
{
    const [ open, setOpen ] = useState( false );

    const handleClose = () => {
      setOpen(!open);
    };

    const halndleOpen = () =>
    {
        
    }
  return (
      <Modal style={{width:"70vw", marginTop: "10vh", height: "80vh", marginLeft: "15vw", backgroundColor: "lightskyblue"}}>
          
      </Modal>
  )
}

export default ModalView