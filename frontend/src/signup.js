import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { NavLink, useHistory } from "react-router-dom";
export default function Signin() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const history = useHistory();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    setError(false);
    setErrMsg("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password === user.cpassword) {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);
        const { data } = await axios.post(
          "/api/users/register/",
          { name: user.name, email: user.email, password: user.password },
          config
        );
        setUser({
          name: "",
          email: "",
          password: "",
          cpassword: "",
        });
        setLoading(false);

        history.push("/signin");
      } catch (error) {
        setError(true);
        setLoading(false);

        setErrMsg(
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        );
      }
    } else {
      setLoading(false);

      setError(true);
      setErrMsg("Password Not Match");
    }
  };
  return (
    <React.Fragment>
      <div className="for-center2">
        <form className="form-class" onSubmit={handleSubmit}>
          {error && (
            <div
              style={{
                backgroundColor: "pink",
                width: "max-content",
                padding: "10px",
              }}
              className="alert alert-danger"
              role="alert"
            >
              {errMsg}
            </div>
          )}
          <h3>SIGN Up</h3>

          <div className="form-group">
            {/* <label>Email address</label><br></br> */}
            <i class="zmdi zmdi-account icon-"></i>
            <input
              type="text"
              className="form-control name"
              placeholder="Enter name"
              name="name"
              value={user.name}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            {/* <label>Email address</label><br></br> */}
            <i class="zmdi zmdi-email icon-"></i>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            {/* <label>Email address</label><br></br> */}
            <i class="zmdi zmdi-lock icon-"></i>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            {/* <label>Email address</label><br></br> */}
            <i class="zmdi zmdi-lock icon-"></i>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInput}
            />
          </div>

          {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}
          {loading ? (
            <button className="btn btn-primary btn-block">loading..</button>
          ) : (
            <button type="submit" className="btn btn-primary btn-block">
              SIGN UP
            </button>
          )}
          <p className="forgot-password text-right">
            Already Reagistered ?{" "}
            <NavLink
              activeClassName="is-active"
              exact={true}
              className="nav-link"
              to="/signin"
            >
              <a href="#">Login</a>
            </NavLink>
          </p>
        </form>
      </div>
    </React.Fragment>
  );
}
