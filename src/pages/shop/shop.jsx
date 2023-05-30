import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from "./product";
import "./shop.css";
import { Link } from 'react-router-dom';

export const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="shopTitle">
              <h1>ECOMMERCE WEBSITE</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {PRODUCTS.map((product) => (
            <div className="col-md-4" key={ product.id }>
              <Link to={`/products/${product.id}`}>{<Product data={product} />}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

