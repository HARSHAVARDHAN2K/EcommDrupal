import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.productName}</h2>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={product.productImage} alt={product.productName} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetail;
