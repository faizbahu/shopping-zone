import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import Loader from "./Loader";
import FormContainer from "./FormContainer.js";
import { register } from "./actions/userAction.js";
import "./signup.css";

export const Signup = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setMessage("Passwords donot match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div
      className="for-center"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {/* {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />} */}

      <form className="form-class" onSubmit={submitHandler}>
        <h3>SIGN UP</h3>
        {message && <Message variant="danger">{message}</Message>}
        <div className="form-group">
          <i class="zmdi zmdi-account icon-"></i>
          <input
            type="name"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <i class="zmdi zmdi-email icon-"></i>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <i class="zmdi zmdi-lock icon-"></i>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <i class="zmdi zmdi-lock icon-"></i>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button style={{ borderRadius: "6px" }} type="submit" variant="primary">
          Register
        </button>

        <p className="forgot-password text-right" style={{ color: "black" }}>
          Have an Account?{" "}
          <Link
            activeClassName="is-active"
            exact={true}
            className="nav-link"
            to="/signin"
          >
            <a href="#">Login</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
