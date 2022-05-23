import React, { useState, useEffect } from "react";
import Checkoutsteps from "./Checkoutsteps";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "./Message";
import { createOrder } from "./actions/orderActions.js";
import "./placeorder.css";
const Placeorder = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;
  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      // dispatch({ type: USER_DETAILS_RESET });
      // dispatch({ type: ORDER_CREATE_RESET });
    }
    // eslint-disable-next-line
  }, [history, success]);
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  return (
    <div className="bbb">
      <Checkoutsteps step1 step2 step3 step4 />
      <div className="top-summary">
        <div>
          <div>
            <h3 className="shiping">Shipping</h3>
            <p className="bordering" style={{ marginTop: "19px" }}>
              <strong style={{ fontSize: "16px" }}>Address:</strong>
              {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
              {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
            </p>
          </div>
          <div>
            <h3 className="shiping">Payment Method</h3>
            <p className="bordering" style={{ marginTop: "19px" }}>
              <strong style={{ fontSize: "16px" }}>Method: </strong>
              {cart.paymentMethod}
            </p>
          </div>
          <div className="order-items">
            <h3>Order Items</h3>
            {cart.cartItems.length === 0 ? (
              <Message>Your cart is empty</Message>
            ) : (
              <div>
                {cart.cartItems.map((item, index) => (
                  <div className="sequencing">
                    <div className="image-image" key={index}>
                      <img src={item.image} />
                    </div>
                    <div className="product-name">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div className="item-price">
                      {item.qty} x Rs.{item.price}=Rs.{item.qty * item.price}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="order">
          <h3>ORDER SUMMARY</h3>
          <div className="order2">
            <h1>Items</h1>
            <h2> Rs.{cart.itemsPrice} </h2>
          </div>
          <div className="order2">
            <h1>Shipping</h1>
            <h2>Rs.{cart.shippingPrice}</h2>
          </div>
          <div className="order2">
            <h1>Tax</h1>
            <h2>Rs.{cart.taxPrice}</h2>
          </div>
          <div className="order2">
            <h1>Total</h1>
            <h2>Rs.{cart.totalPrice}</h2>
          </div>
          <div>{error && <Message variant="danger">{error}</Message>}</div>
          <button
            className="checkout2"
            disabled={cart.cartItems == 0}
            onClick={placeOrderHandler}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
