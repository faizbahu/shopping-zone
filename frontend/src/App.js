import React, { useRef, useEffect } from "react";
import {
  BrowserRouter,
  NavLink,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import Cart from "./Cart.js";
import ProductPage from "./ProductPage.js";
import Signin from "./Signin.js";
import Signup from "./Signup.js";
import logo from "./images/shopping zone(1).gif";
import logo1 from "./images/Capture.PNG";
import { BsCart4 } from "react-icons/bs";
import { FiLogOut, FiTarget } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import {logout} from "./actions/userAction.js"
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./images/arrow-right-circle.svg";
import {useDispatch, useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import Profile from './Profile.js';
import Shipping from './Shipping.js';
import Payment from './Payment.js';
import Scrollto from './Scrollto.js';
// import {LinkContainer} from 'react-router-bootstrap';
function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout())
  }
  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle("menu-collapse");
  };
  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains("menu-collapse")) {
      navbarLinks.current.classList.add("menu-collapse");
    }
  };
  // const logout = (e) => {
  //   if (localStorage.getItem("userInfo")) {
  //     localStorage.removeItem("userInfo");
  //   } else {
  //     alert("Please login first");
  //   }
  
  return (
    <div className="App">
      <ScrollToTop
        smooth
        component={
          <MySVG className="myfaiz" style={{ transform: "rotate(90deg)" }} />
        }
      />
      <BrowserRouter>
      <Scrollto>
        <nav className="navbar">
          <div className="navbar-container">
            <p href="#" className="brand-title" style={{ color: "#ff4b58" }}>
              <NavLink
                activeClassName="is-active"
                exact={true}
                className="nav-link"
                to="/"
              >
                <h1 className="text">Shopping Zone</h1>
              </NavLink>
            </p>
            <button
              onClick={(e) => {
                handleNavbarButton(e);
              }}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="search-bar">
              <input
                type="text"
                className="search-products"
                placeholder="Search Products"
              />
              <button className="search-button">Seacrh</button>
            </div>
            <div ref={navbarLinks} className="navbar-links menu-collapse">
            <div className="search-bar-2">
              <input
                type="text"
                className="search-products"
                placeholder="Search Products"
              />
              <button className="search-button">Seacrh</button>
            </div>
              <ul className="links-list">
                <li className="nav-item">
                  <NavLink
                    activeClassName="is-active"
                    exact={true}
                    className="nav-link"
                    to="/cart"
                  >
                    <h3 className="cart">
                      <BsCart4 className="cart-icon" />
                      Cart
                    </h3>
                  </NavLink>
                </li>

                <li className="nav-item2">
                  {userInfo ? (
                    <NavLink
                      activeClassName="is-active"
                      exact={true}
                      className="nav-link"
                      to="/profile"
                    >
                      <div className="dropdown" style={{dislay:"flex"}} id="username">
                      <MdAccountCircle className="signin-icon" style={{fontSize:"25px"}} />
                        <h3 className="dropbtn">{userInfo.name}</h3>
                        <div className="dropdown-content">
                        <a className="show">
                          {/* <MdAccountCircle className="signin-icon" /> */}
                          Profile
                        </a>
                        <a className="show" onClick={logoutHandler}>Logout</a>
                        </div>
                      </div>
                    </NavLink>
                  ) : (
                    <NavLink
                      activeClassName="is-active"
                      exact={true}
                      className="nav-link"
                      to="/signin"
                    >
                      <div>
                        <h3 className="cart">
                          {/* <MdAccountCircle className="signin-icon" /> */}
                          LOG IN
                        </h3>
                      </div>
                    </NavLink>
                  )}
                  </li>
                  {/* <NavLink
                    activeClassName="is-active"
                    exact={true}
                    className="nav-link"
                    to="/signin"
                  >
                    <div>
                      <h3 className="sign">
                        <MdAccountCircle className="signin-icon" />
                        LOG IN
                      </h3>
                    </div>
                  </NavLink> */}
              
                {/* <li className="nav-item">
                  <NavLink
                    activeClassName="is-active"
                    exact={true}
                    className="nav-link"
                    to="/signin"
                  >
                    <div>
                      <h3 onClick={logout} className="sign">
                        <FiLogOut className="signin-icon" />
                        Logout
                      </h3>
                    </div>
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <AllRoutes
            hideMenu={() => {
              hideNavMenu();
            }}
          ></AllRoutes>
        </div>
        </Scrollto>
      </BrowserRouter>
    </div>
  );
}

function AllRoutes({ hideMenu }) {
  let location = useLocation();
  useEffect(() => {
    hideMenu();
  }, [location]);

  return (
    <Switch>
       <Route path="/payment" component={Payment}></Route>
      <Route path="/shipping" component={Shipping}></Route>
      <Route path="/product/:_id" component={ProductPage}></Route>
      <Route path="/signin" component={Signin}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/cart/:id?" component={Cart}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
  );
}
export default App;
