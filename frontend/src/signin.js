import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import Loader from "./Loader";
import FormContainer from "./FormContainer.js";
import { login } from "./actions/userAction.js";

export const Signin = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="for-center" style={{paddingBottom:"202px",display:"flex",justifyContent:"center"}}>
      
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      
      <form className="form-class" onSubmit={submitHandler}>
      <h3>LOG IN</h3>
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

        <Button type="submit" variant="primary">
          Sign In
        </Button>

        <p className="forgot-password text-right" style={{color: "black"}}>
            New Customer?{" "}
            <Link
              activeClassName="is-active"
              exact={true}
              className="nav-link"
              to="/signup"
            >
              <a href="#">Register</a>
            </Link>
          </p>
      </form>

      
    </div>
  );
};

export default Signin;
