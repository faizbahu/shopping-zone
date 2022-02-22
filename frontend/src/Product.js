import React from "react";
import "./product.css";
import Rating from "./Rating";
import {  Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <div>
      <Link
        activeClassName="is-active"
        className="nav-link"
        to={`/product/${product._id}`}
      >
        <div className="products">
          <img src={product.image} />
          <p>{product.sale}</p>
          <h3>{product.name}</h3>
          <h2>Rs.{product.price}</h2>
          <div className="checking">
            <Rating value={product.rating}/>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Product;
