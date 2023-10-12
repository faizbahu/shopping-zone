import React, { useState, useEffect } from "react";
// import Checkoutsteps from "./Checkoutsteps";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Message from "./Message";
import Loader from "./Loader";
import Checkoutsteps from "./Checkoutsteps";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "./actions/orderActions.js";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "./constants/orderConstants";
import "./placeorder.css";
const Order = ({ match, history }) => {
  const orderId = match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay || successDeliver) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, order]);
  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
    window.location.reload();
  };
  const deliverHandler = (deliverResult) => {
    dispatch(deliverOrder(order, deliverResult));
    window.location.reload();
  };

  //   const refreshPage = ()=>{
  //     window.location.reload();
  //  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <div className="bbb">
        <Checkoutsteps step1 step2 step3 step4 />

        <div className="top-summary">
          <div>
            <div className="bordering">
              <h1 style={{ "font-size": "37px", "margin-bottom": "20px" }}>
                Order {order._id}
              </h1>
              <h3 className="shiping">Shipping</h3>
              <p
                className="borderin"
                style={{ marginTop: "19px", border: "none", fontWeight: "600" }}
              >
                Name:
                <span> {order.user.name}</span>
              </p>
              <p style={{ marginTop: "19px", fontWeight: "600" }}>
                Email:
                <a
                  style={{ color: "white" }}
                  href={`mailto:${order.user.email}`}
                >
                  {" "}
                  {order.user.email}
                </a>
              </p>
              <p className="borderin" style={{ marginTop: "19px" }}>
                <strong style={{ fontSize: "16px" }}>Address: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <p
                  style={{
                    fontSize: "19px",
                    background: "rgb(32 225 56)",
                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  Delivered on {order.deliveredAt}
                </p>
              ) : (
                <p
                  style={{
                    fontSize: "19px",
                    background: "#e12020",
                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  Not Delivered{" "}
                </p>
              )}
            </div>
            <div className="bordering">
              <h3 className="shiping">Payment Method</h3>
              <p style={{ marginTop: "10px" }}>
                <strong style={{ fontSize: "16px" }}>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <p
                  style={{
                    fontSize: "19px",
                    background: "rgb(32 225 56)",
                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  Paid on {order.paidAt}
                </p>
              ) : (
                <p
                  style={{
                    fontSize: "19px",
                    background: "#e12020",
                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  Not Paid{" "}
                </p>
              )}
            </div>
            <div className="order-items">
              <h3>Order Items</h3>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <div>
                  {order.orderItems.map((item, index) => (
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

          <div
            style={{ border: "1px solid rgb(65, 196, 255)" }}
            className="order"
          >
            <h3>ORDER SUMMARY</h3>
            <div className="order2">
              <h1>Items</h1>
              <h2> Rs.{order.itemsPrice} </h2>
            </div>
            <div className="order2">
              <h1>Shipping</h1>
              <h2>Rs.{order.shippingPrice}</h2>
            </div>
            <div className="order2">
              <h1>Tax</h1>
              <h2>Rs.{order.taxPrice}</h2>
            </div>
            <div className="order2">
              <h1>Total</h1>
              <h2>Rs.{order.totalPrice}</h2>
            </div>
            {!order.isPaid && (
              <div>
                {loadingPay && <Loader />}
                {!sdkReady ? (
                  <Loader />
                ) : (
                  <PayPalButton
                    amount={order.totalPrice}
                    onSuccess={successPaymentHandler}
                  />
                )}
              </div>
            )}
            {loadingDeliver && <Loader />}
            {userInfo &&
              userInfo.isAdmin &&
              order.isPaid &&
              !order.isDelivered && (
                <div>
                  <button className="checkout23" onClick={deliverHandler}>
                    Mark As Delivered
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
