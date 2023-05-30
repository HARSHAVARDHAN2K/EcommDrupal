import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import IndProduct from './components/IndivibualProduct/ProductDetails';
import CollapsibleExample from './components/Navbar/NavScript';
 

function App() {
  return (
    <div className="App">
       <CollapsibleExample></CollapsibleExample>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/products/:productId"
              element={<IndProduct></IndProduct>}
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
