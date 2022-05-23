import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import Loader from "./Loader";
import FormContainer from "./FormContainer.js";
import { getUserDetails, updateUser } from "./actions/userAction.js";
import "./signup.css";
import { USER_UPDATE_RESET } from "./constants/userConstants";

export const UserEditScreen = ({ match, history }) => {
  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;
  const userId = match.params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push("/admin/userlist");
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [dispatch, history, userId, user, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
  };

  return (
    <>
      <div
        className="for-center"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "148px",
          paddingTop: "148px",
        }}
      >
        {/* {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />} */}
        {loading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <form className="form-class" onSubmit={submitHandler}>
            <h3>Edit User</h3>
            {loadingUpdate && <Loader />}
            {errorUpdate && <div>{errorUpdate}</div>}
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
              <input
                type="checkbox"
                className="form-control"
                label="Is Admin"
                value="admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                style={{ marginLeft: "1px" }}
              />
              <label
                style={{ color: "white", marginLeft: "6px", fontSize: "17px" }}
                for="admin"
              >
                Is Admin
              </label>
              <br></br>
            </div>

            <Button type="submit" variant="primary">
              Update
            </Button>
            <Button>
              <Link style={{ color: "white" }} to="/admin/userlist">
                Go Back
              </Link>
            </Button>
          </form>
        )}
      </div>
    </>
  );
};

export default UserEditScreen;
