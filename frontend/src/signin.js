import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import "./signin.css";
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const history = useHistory();
  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    if (userInfoFromStorage) {
      history.push("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/users/login/",
        { username: email, password: password },
        config
      );
      setLoading(false);
      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/");
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrMsg(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      );
    }
  };
  return (
    <React.Fragment>
      <div className="for-center">
        <form onSubmit={handleSubmit}>
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
          <h3>LOG IN</h3>

          <div className="form-group">
            {/* <label>Email address</label><br></br> */}
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
            {/* <label>Password</label><br></br> */}
            <i class="zmdi zmdi-lock icon-"></i>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              SIGN IN
            </button>
          )}
          <p className="forgot-password text-right">
            New Customer ?
            <NavLink
              activeClassName="is-active"
              exact={true}
              className="nav-link"
              to="/signup"
            >
              <a href="#">Register</a>
            </NavLink>
          </p>
        </form>
      </div>
    </React.Fragment>
  );
}
