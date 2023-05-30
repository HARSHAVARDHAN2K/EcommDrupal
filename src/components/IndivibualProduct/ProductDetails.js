import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal } from "react-bootstrap";
import { Box } from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";



const ProductDetails = () => {
  const { productId } = useParams();
  const thisProduct = PRODUCTS.find( ( prod ) => prod.id === Number( productId ) );
  const [ clickedImage, setClickedImage ] = useState( thisProduct.productImage );
  const [ open, setOpen] = useState(false)
  
  useEffect( () =>
  {
    
  }, [ clickedImage, open ] )
  
  function setImage ( props )
  {
    setClickedImage( props )
    
  }

  const EnlargeImage = (props)  =>
  {  
    console.log(open)
    setOpen( true )
  }

  const handleClose = () =>
  {
    setOpen(false)
  }

  return (
    <>
      {!open ? (
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Col>
                <Row>
                  <img
                    src={clickedImage}
                    style={{ width: "80%" }}
                    onClick={() => EnlargeImage(clickedImage)}
                  ></img>
                </Row>
                <Row>
                  <img
                    src={thisProduct.productImage}
                    style={{ width: "20%" }}
                    onClick={() => setImage(thisProduct.productImage)}
                    onMouseEnter={() => EnlargeImage()}
                  ></img>
                  <img
                    src={PRODUCTS[0].productImage}
                    style={{ width: "20%" }}
                    onClick={() => setImage(PRODUCTS[0].productImage)}
                  ></img>
                  <img
                    src={PRODUCTS[3].productImage}
                    style={{ width: "20%" }}
                    onClick={() => setImage(PRODUCTS[3].productImage)}
                  ></img>
                  <img
                    src={PRODUCTS[2].productImage}
                    style={{ width: "20%" }}
                    onClick={() => setImage(PRODUCTS[2].productImage)}
                  ></img>
                </Row>
              </Col>
            </Col>
            <Col xs={12} md={6}>
              <h6>ID : #{thisProduct.id}</h6>
              <h2>{thisProduct.productName}</h2>
              <h3>Description</h3>
              <h4>Price: {thisProduct.price}</h4>
            </Col>
          </Row>
        </Container>
      ) : (
        <Box
          style={{
            width: "70vw",
            marginTop: "10vh",
            height: "80vh",
            marginLeft: "15vw",
          }}
          >
          <Box><DisabledByDefaultIcon onClick={()=>{handleClose()}}></DisabledByDefaultIcon></Box>
          <img
            src={clickedImage}
            style={{ width: "80%", height: "80%" }}
            onClick={() => EnlargeImage(clickedImage)}
          ></img>
        </Box>
      )}
    </>
  );
};

export default ProductDetails;
