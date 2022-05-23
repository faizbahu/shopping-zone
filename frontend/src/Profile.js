import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './Message'
import Loader from './Loader'
import { Link } from "react-router-dom";
import { getUserDetails, updateUserProfile } from "./actions/userAction";
import { listMyOrders } from "./actions/orderActions";
import "./profile.css";
import { USER_UPDATE_PROFILE_RESET } from "./constants/userConstants";
// import { USER_UPDATE_PROFILE_RESET } from './constants/userConstants'

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <div
      className="for-center"
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "136px",
      }}
    >
      {message && <Message variant="danger">{message}</Message>}
      {}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <form className="form-class" onSubmit={submitHandler}>
          {success && (
            <div
              style={{
                background: "#80b1c7",
                padding: "10px",
                marginBottom: "20px",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              Profile Updated
            </div>
          )}
          <h2>User Profile</h2>
          <div className="form-group">
            <i class="zmdi zmdi-account icon-"></i>
            <input
              type="name"
              className="form-control"
              placeholder="Enter name"
              style={{ width: "220px" }}
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
              style={{ width: "220px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <i class="zmdi zmdi-lock icon-"></i>
            <input
              type="password"
              className="form-control"
              style={{ width: "220px" }}
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
              style={{ width: "220px" }}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <Button type="submit" variant="primary">
            Update
          </Button>
        </form>
      )}

      <div className="sections">
        <h2>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <div>{errorOrders}</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th style={{ border: "1px solid #41c4ff" }}>ID</th>
                <th style={{ borderRight: "1px solid #41c4ff" }}>DATE</th>
                <th style={{ borderRight: "1px solid #41c4ff" }}>TOTAL</th>
                <th style={{ borderRight: "1px solid #41c4ff" }}>PAID</th>
                <th style={{ borderRight: "1px solid #41c4ff" }}>DELIVERED</th>
                <th style={{ borderRight: "1px solid #41c4ff" }}></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td style={{ border: "1px solid #41c4ff", borderTop: "0px" }}>
                    {order._id}
                  </td>
                  <td style={{ borderRight: "1px solid #41c4ff" }}>
                    {order.createdAt.substring(0, 10)}
                  </td>
                  <td style={{ borderRight: "1px solid #41c4ff" }}>
                    Rs.{order.totalPrice}
                  </td>
                  <td style={{ borderRight: "1px solid #41c4ff" }}>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i
                        className="fa fa-times"
                        style={{ color: "red", fontSize: "24px" }}
                      ></i>
                    )}
                  </td>
                  <td style={{ borderRight: "1px solid #41c4ff" }}>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i
                        className="fa fa-times"
                        style={{ color: "red", fontSize: "24px" }}
                      ></i>
                    )}
                  </td>
                  <td style={{ borderRight: "1px solid #41c4ff" }}>
                    <Link to={`/order/${order._id}`}>
                      <button className="details">Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProfileScreen
