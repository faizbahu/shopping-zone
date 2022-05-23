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
import { logout } from "./actions/userAction.js";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./images/arrow-right-circle.svg";
import { useDispatch, useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import Profile from "./Profile.js";
import Shipping from "./Shipping.js";
import Payment from "./Payment.js";
import Scrollto from "./Scrollto.js";
import Placeorder from "./PlaceOrder.js";
import weblogo from "./images/web logo.png";
import Shoesscreen from "./Shoesscreen";
import Kids from "./Kids.js";
import Jeans from "./Jeans.js";
import Shirts from "./Shirts.js";
import Order from "./Order.js";
import UserListScreen from "./UserListScreen";
import { Link } from "react-router-dom";
import UserEditScreen from "./UserEditScreen";
import ProductListScreen from "./ProductListScreen";
import ProductEditScreen from "./ProductEditScreeen";
import OrderListScreen from "./OrderListScreen";
import SearchBox from "./SearchBox.js";
// import {LinkContainer} from 'react-router-bootstrap';
function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
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
                  {" "}
                  {/* <img className="lll" src={weblogo} /> */}
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
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
              {/* <div className="search-bar">
                <input
                  type="text"
                  className="search-products"
                  placeholder="Search Products"
                />
                <button className="search-button">Seacrh</button>
              </div> */}
              <div ref={navbarLinks} className="navbar-links menu-collapse">
                {/*   <div className="search-bar-2">
                  <input
                    type="text"
                    className="search-products"
                    placeholder="Search Products"
                  />
                  <button className="search-button">Seacrh</button>
                </div> */}
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
                        CART
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
                        <div
                          className="dropdown"
                          style={{ dislay: "flex" }}
                          id="username"
                        >
                          <MdAccountCircle
                            className="signin-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <h3 className="dropbtn">{userInfo.name}</h3>
                          <div className="dropdown-content">
                            <a className="show">
                              {/* <MdAccountCircle className="signin-icon" /> */}
                              Profile
                            </a>
                            <a className="show" onClick={logoutHandler}>
                              Logout
                            </a>
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
                        <div style={{ marginTop: "3px" }}>
                          <h3 className="cart">
                            {/* <MdAccountCircle className="signin-icon" /> */}
                            LOG IN
                          </h3>
                        </div>
                      </NavLink>
                    )}
                  </li>
                  {userInfo && userInfo.isAdmin && (
                    <li className="chaki">
                      <NavLink
                        activeClassName="is-active"
                        exact={true}
                        className="nav-link"
                        to="/userlist"
                      >
                        <div className="dropdown">
                          <h3 className="cart dropbtn">
                            {/* <MdAccountCircle className="signin-icon" /> */}
                            Admin
                            <i
                              style={{ marginLeft: "8px" }}
                              class="fa fa-angle-down signin-icon"
                            ></i>
                          </h3>
                          <div className="dropdown-content2">
                            <Link className="show" to="/admin/userlist">
                              {/* <MdAccountCircle className="signin-icon" /> */}
                              Users
                            </Link>
                            <Link className="show" to="/admin/productlist">
                              Products
                            </Link>
                            <Link className="show" to="/admin/orderlist">
                              Orders
                            </Link>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                  )}

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
      <Route path="/placeorder" component={Placeorder}></Route>
      <Route path="/shoesscreen" component={Shoesscreen}></Route>
      <Route path="/admin/userlist" component={UserListScreen}></Route>
      <Route path="/admin/orderlist" component={OrderListScreen}></Route>
      <Route path="/admin/user/:id/edit" component={UserEditScreen}></Route>
      <Route path="/admin/productlist" component={ProductListScreen}></Route>
      <Route
        path="/admin/product/:id/edit"
        component={ProductEditScreen}
      ></Route>
      <Route path="/kids" component={Kids}></Route>
      <Route path="/jeans" component={Jeans}></Route>
      <Route path="/shirts" component={Shirts}></Route>
      <Route path="/order/:id" component={Order}></Route>
      <Route path="/search/:keyword" component={Home} exact></Route>
      <Route path="/page/pageNumber" component={Home} exact></Route>
      <Route
        path="/search/:keyword/page/:pageNumber"
        component={Home}
        exact
      ></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
  );
}
export default App;
