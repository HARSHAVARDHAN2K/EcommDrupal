import React from "react";

export const Product = (props) => {
  const { productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <div className="text-center">
        <button className="addToCartBttn">Add To Cart</button>
      </div>
    </div>
  );
};
