// import React from 'react';
// import { PRODUCTS } from '../../products';
// import { Product } from "./product";
// import "./shop.css";
// import { Link } from 'react-router-dom';

// export const Shop = () => {
//   return (
//     <div className="shop">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="shopTitle">
//               <h1>ECOMMERCE WEBSITE</h1>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           {PRODUCTS.map((product) => (
//             <div className="col-md-4" key={ product.id }>
//               <Link to={`/products/${product.id}`}>{<Product data={product} />}</Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// ----------------------- 2nd code -------------------------
// import React from 'react';
// import { PRODUCTS } from '../../products';
// import { Product } from './product';
// import './shop.css';
// import { Link } from 'react-router-dom';

// export const Shop = () => {
//   return (
    
//     <div className="shop">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="shopTitle">
//               <h1>ECOMMERCE WEBSITE</h1>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           {PRODUCTS.map((product) => (
//             <div className="col-md-4" key={product.id}>
//               <div className="card mb-4">
//                 <img src={product.productImage} className="card-img-top" alt={product.productName} />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.productName}</h5>
//                   <p className="card-text">${product.price}</p>
//                   <Link to={`/products/${product.id}`} className="btn btn-primary">
//                     View Product
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };



// -----------------------------3rd modification --------------------------
import React from 'react';
import { PRODUCTS } from '../../products';
import './shop.css';
import { Link } from 'react-router-dom';

export const Shop = () => {
  return (
    <div className="shop">
      <div className="jumbotron bg-image rounded-0" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")' }}>
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="container">
          <h1 className="display-4 text-white">ADVERTISE</h1>


            <p className="lead">Subheading</p>
            <p>
              <a className="btn btn-outline-light btn-lg" href="#section1" role="button">
                PRODUCTS
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="shopTitle" id="section1">
              <h1>ECOMMERCE WEBSITE</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {PRODUCTS.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4">
                <img src={product.productImage} className="card-img-top" alt={product.productName} />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">${product.price}</p>
                  <Link to={`/products/${product.id}`} className="btn btn-primary">
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
