import React, { useState, useEffect } from "react";
import { FaCity } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import Message from "./Message";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./shipping.css";
import { saveShippingAddress } from "./actions/cartActions";
import Checkoutsteps from "./Checkoutsteps";
const Shipping = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };
  return (
    <div className="background-color">
      <Checkoutsteps step1 step2 />
      <div
        className="for-center4"
        style={{
          // marginTop: "58px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form className="form-class" onSubmit={submitHandler}>
          <h3>SHIPPING</h3>
          <div className="form-group">
            <i class="fa fa-address-card icon-"></i>
            <input
              type="address"
              className="form-control"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <FaCity className="icon-" />

            {/* <i class="fa fa-address-card icon-"></i> */}
            <input
              type="city"
              className="form-control"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="form-group">
          <i class="fa fa-address-card icon-"></i>
            {/* <i class="zmdi zmdi-lock icon-"></i> */}
            <input
              type="postalcode"
              className="form-control"
              placeholder="Enter Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>

          <div className="form-group">
            <GiEarthAmerica className="icon-" />
            {/* <i class="fa fa-earth-americas icon-"></i> */}
            <input
              type="country"
              className="form-control"
              placeholder="Enter Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <Button type="submit" variant="primary">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
