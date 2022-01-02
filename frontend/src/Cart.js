// import React from 'react'
import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './cart.css';
export default function Cart() {
  const history = useHistory();
  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    if (!userInfoFromStorage) {
      history.push("/signin");
    }
  }, []);
  return (
    <div>
      <div className="cart-page">
        <div className="empty">
        <h1>Shopping Cart</h1>
        <p>Your Cart is Empty</p>
        <NavLink
            activeClassName="is-active"
            exact={true}
            className="nav-link"
            to="/home"
          >
        <button>GO BACK</button></NavLink>
        </div>
      <div>
      <div class="row1">
        <h6>Status</h6>
        <p>In Stock</p>
      </div>
      <div class="row1">
        <h6>Price</h6>
        <p>$89.99</p>
      </div>
      <div class="row1">
        <a href="#">Add to cart</a>
      </div>
      </div>
      </div>
      </div>
    
  )
}
