import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.productName}</h2>
      <img src={product.productImage} alt={product.productName} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductDetail;
