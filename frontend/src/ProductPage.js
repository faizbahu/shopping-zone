import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  FormControl,
} from "react-bootstrap";
import Footer from "./Footer.js";
import "./productpage.css";
import axios from "axios";
// import products from "./products.js";
import Rating from "./Rating";
const ProductPage = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params._id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match]);
  const addToCartHandler = () => {
    history.push(`/cart/${match.params._id}?qty=${qty}`);
  };
  return (
    <div>
      <div class="main">
        <div class="back"></div>
        <div class="main-img">
          <div className="expo">
          <img src={product.image} alt="" class="airpods-img"></img></div>
          <div class="img-article">
            <h3>{product.name}</h3>
            <div className="checking">
              <Rating value={product.rating} />
            </div>
            <div class="price">
              <p>Rs.{product.price}</p>
            </div>
            <div class="description">
              <p>
                Made in totally soft spandex material , which keeps you dry
                anytime . <br></br>- 4 way stretch <br></br>
                -Spandex <br></br>
                -Reflector Tt Logo<br></br>
                -Limited Stock made
              </p>
            </div>
          </div>
          <div class="price-table">
            <div
              class="row1"
              style={{
                borderTopLeftRadius: "14px",
                borderTopRightRadius: "14px",
              }}
            >
              <h6>Price</h6>
              <p>{product.price}</p>
            </div>
            <div className="row1">
              <h6>Status</h6>
              <p>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</p>
            </div>

            {product.countInStock > 0 && (
              <div className="row1">
                <h6>Quantity</h6>
                <FormControl
                  as="select"
                  className="quantity"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {" "}
                      {x + 1}{" "}
                    </option>
                  ))}
                </FormControl>
              </div>
            )}
            <div className="addto-div">
              {/* <Link to="/Cart"> */}
              <button
                onClick={addToCartHandler}
              className="addto"
                disabled={product.countInStock == 0}
              >
                Add To Cart
              </button>
            </div>
            {/* </Link> */}
          </div>
        </div>
        <div class="reviews">
          <h3>
            <a href="#">Reviews</a>
          </h3>

          <div class="review-level">
            <h4>Jane Doe</h4>
            <div class="level">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <p>2020-09-27</p>
            <h6>
              Sir this shirt is very comfortable i request u to launch in white
              colour plzzz
            </h6>
          </div>
          <div class="review-level">
            <h4>Jane Doe</h4>
            <div class="level">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>2020-09-27</p>
            <h6>
              Received my parcel on time and the stuff of black is so good and
              comfortable.
            </h6>
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
      <Footer />
    </div>
  );
};
export default ProductPage;
