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
import Signin from "./signin.js";
import Signup from "./signup.js";
import { BsCart4 } from "react-icons/bs";
import {FiLogOut} from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
function App() {
  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle("menu-collapse");
  };

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains("menu-collapse")) {
      navbarLinks.current.classList.add("menu-collapse");
    }
  };

  const logout = (e) => {
    if (localStorage.getItem("userInfo")) {
      localStorage.removeItem("userInfo");
    } else {
      alert("Please login first");
    }
  };
  return (
    <div className="App">
    <BrowserRouter>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="brand-title">
            {/* <img
              className="pest-image"
              src="https://thumbs.dreamstime.com/b/fly-icon-elements-pest-control-insect-neon-style-icons-simple-websites-web-design-mobile-app-info-graphics-dark-136739809.jpg"
              alt=""
            /> */}
            <NavLink
              activeClassName="is-active"
              exact={true}
              className="nav-link"
              to="/"
            >
              Shopping Zone
            </NavLink>
          </a>
          <button
            onClick={(e) => {
              handleNavbarButton(e);
            }}
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <input
              type="text"
              className="search-products"
              placeholder="Search Products"
            />
            <button className="search-button">Seacrh</button>
          </div>
          <div ref={navbarLinks} className="navbar-links menu-collapse">
            <ul className="links-list">
              {/* <li className="nav-item">
                <NavLink
                  activeClassName="is-active"
                  exact={true}
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li> */}
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
              <li className="nav-item">
                <NavLink
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
                </NavLink>
              </li>

              <li className="nav-item">
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
              </li>
             </ul>
              {/* {localStorage.getItem("userInfo")} */}
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
      <Route path="/productpage" component={ProductPage}></Route>
      <Route path="/signin" component={Signin}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/cart" component={Cart}></Route>
      {/* <Route path="/cropseason" component={Cropseason}></Route>
      <Route path="/tutorials" component={tutorials}></Route> */}
      {/* <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contactus}></Route> */}
      {/* <Route path="/login" component={Login}></Route> */}
      <Route path="/" component={Home}></Route>
    </Switch>
  );
}
export default App;
