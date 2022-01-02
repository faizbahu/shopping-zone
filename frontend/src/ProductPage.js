import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./productpage.css";
import airpods from "./images/air-white.jpg";
export default function ProductPage() {
  const history = useHistory();
  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    if (!userInfoFromStorage) {
      history.push("/signin");
    }
  }, []);
  return (
    <React.Fragment>
      <div class="main">
        <div class="back">
          <NavLink
            activeClassName="is-active"
            exact={true}
            className="nav-link"
            to="/home"
          >
            <button className="go-back">GO BACK</button>
          </NavLink>
        </div>
        <div class="main-img">
          <img src="https://cdn.shopify.com/s/files/1/1963/3741/products/Untitleddesign_15_360x.png?v=1619958451" alt="" class="airpods-img"></img>
          <div class="img-article">
            <h3>Black Compression Tee</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
              <p>2 reviews</p>
            </div>
            <div class="price">
              <p>Price: 899.99 PKR</p>
            </div>
            <div class="description">
              <p>
              Made in totally soft spandex material , which keeps you dry anytime . <br></br>

- 4 way stretch <br></br>

-Spandex <br></br>

-Reflector Tt Logo<br></br> 

-Limited Stock made 
              </p>
            </div>
          </div>
          <div class="price-table">
            <div class="row1">
              <h6>Price</h6>
              <p>899.99 PKR</p>
            </div>
            <div class="row1">
              <h6>Status</h6>
              <p>In Stock</p>
            </div>
            <div class="row1">
              <h6>Price</h6>
              <p>899.99 PKR</p>
            </div>
            <div class="row1">
              <a href="#">Add to cart</a>
            </div>
          </div>
          <div class="reviews">
            <h3>
              <a href="#">Reviews</a>
            </h3>

            <div class="review-level">
              <h4>Jane Doe</h4>
              <div class="level">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p>2020-09-27</p>
              <h6>Sir this shirt is very comfortable i request u to launch in white colour plzzz</h6>
            </div>
            <div class="review-level">
              <h4>Jane Doe</h4>
              <div class="level">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>2020-09-27</p>
              <h6>Received my parcel on time and the stuff of black is so good and comfortable.</h6>
            </div>
            <div class="customer-review">
              <h3>Write A Customer Review</h3>
              <NavLink
            activeClassName="is-active"
            exact={true}
            className="nav-link"
            to="/sign"
          >
              <div class="sign-in">
                <p>
                  Please <a href="#">sign-in</a> to write a review
                </p>
              </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
