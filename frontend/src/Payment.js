import React, { useState, useEffect } from "react";
import Message from "./Message";
import {BsPaypal} from 'react-icons/bs';
import {FaStripeS} from 'react-icons/fa';
import { Form, Button, Row, Col } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux';
import "./payment.css";
import {savePaymentMethod} from './actions/cartActions';
import Checkoutsteps from "./Checkoutsteps";
const Payment = ({ history }) => {
  const cart=useSelector(state=>state.cart)
  const{shippingAddress}=cart   
  if(!shippingAddress){
       history.push('/shipping')
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <div className="background-color">
      <Checkoutsteps step1 step2 step3 />
      <div
        className="for-center5"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form className="form-class" onSubmit={submitHandler}>
          <h3>PAYMENT METHOD</h3>
          <p style={{ color: "#bfbebe" }}>SELECT PAYMENT METHOD</p>
          <div className="form-group">
            <BsPaypal className="icon-" />
            {/* <i class="zmdi zmdi-account icon-"></i> */}
            <input
              type="radio"
              className="form-control2"
              id="PayPal"
              name="drone"
              value="PayPal"
              onChange={(e) => setPaymentMethod(e.target.value)}
              checked
            />
            <label className="label" for="paypal">
              PayPal
            </label>
          </div>
          <div className="form-group">
            <FaStripeS className="icon-" />
            {/* <i class="zmdi zmdi-account icon-"></i> */}
            <input
              className="form-control2"
              type="radio"
              id="Stripe"
              name="drone"
              value="Stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="label" for="stripe">
              Stripe
            </label>
          </div>

          <Button type="submit" variant="primary">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
