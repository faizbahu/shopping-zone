import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import {
  // Row,
  // Col,
  // Image,
  // ListGroup,
  // Card,
  // Button,
  FormControl,
} from "react-bootstrap";
import Message from "./Message.js";
import Loader from "react-spinners/ClipLoader";
import Footer from "./Footer.js";
import "./productpage.css";
import axios from "axios";
// import products from "./products.js";
import {
  listProductDetails,
  createProductReview,
} from "./actions/productActions.js";
import { PRODUCT_CREATE_REVIEW_RESET } from "./constants/productConstants.js";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
const ProductPage = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  // const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate;
  useEffect(() => {
    if (successProductReview) {
      alert("Review Submitted!");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }

    // const fetchProduct = async () => {
    //   const { data } = await axios.get(`/api/products/${match.params._id}`);
    //   setProduct(data);
    // };
    // fetchProduct();
    // if (!product._id || product._id !== match.params.id) {
    //   dispatch(listProductDetails(match.params.id));
    //   dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    // }
    dispatch(listProductDetails(match.params._id));
  }, [dispatch, match, successProductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params._id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params._id, {
        rating,
        comment,
      })
    );
  };
  return (
    <div>
      <div class="main">
        <div class="back"></div>
        <div class="main-img" style={{ margin: "3px 46px" }}>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message>{error}</Message>
          ) : (
            <>
              <div className="expo">
                <img src={product.image} alt="" class="airpods-img"></img>
              </div>
              <div class="img-article">
                <h3>{product.name}</h3>
                <div className="checking">
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  ></Rating>
                </div>
                <div class="price">
                  <p>Rs.{product.price}</p>
                </div>
                <div style={{ marginLeft: "0px" }} class="description">
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
                  <p>Rs.{product.price}</p>
                </div>
                <div className="row1">
                  <h6>Status</h6>

                  <p>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </p>
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
                    Add To Basket
                  </button>
                </div>
                {/* </Link> */}
              </div>
              <div class="reviews">
                <h3>Reviews</h3>
                {product.reviews.length == 0 && (
                  <p style={{ fontSize: "19px" }}>No Reviews</p>
                )}
                <div class="review-level">
                  {product.reviews.map((review) => (
                    <div key={review.id}>
                      <h4>{review.name}</h4>
                      <Rating value={review.rating}></Rating>
                      <p>{review.createdAt.substring(0, 10)}</p>
                      <p>{review.comment}</p>
                    </div>
                  ))}
                  <div class="customer-review">
                    <h3>Write A Customer Review</h3>

                    {/* <NavLink
                      activeClassName="is-active"
                      exact={true}
                      className="nav-link"
                      to="/sign"
                    > */}
                    <div
                      style={{
                        backgroundColor: " rgb(65 196 255)",
                        boxShadow:
                          "rgb(60 76 63 / 10%) 3px 2px 21px 11px, rgb(60 64 76 / 20%) 0px 2px 14px 5px",
                        borderRadius: "14px",
                      }}
                      class="sign-in"
                    >
                      {errorProductReview && (
                        <Message variant="danger">{errorProductReview}</Message>
                      )}
                      {userInfo ? (
                        <form onSubmit={submitHandler}>
                          <div
                            style={{
                              padding: " 12px 6px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "217px",
                            }}
                            id="rating"
                          >
                            <h6
                              style={{
                                fontWeight: "600",
                                fontSize: "18px",
                                paddingTop: "0px",
                              }}
                            >
                              Rating
                            </h6>
                            <select
                              style={{ marginLeft: "42px" }}
                              className="quantity form-control"
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="1">1 - Poor</option>
                              <option value="2">2 - Fair</option>
                              <option value="3">3 - Good</option>
                              <option value="4">4 - Very Good</option>
                              <option value="5">5 - Excellent</option>
                            </select>
                          </div>

                          <div
                            style={{ padding: " 14px 6px", display: "flex" }}
                            id="comment"
                          >
                            <h6
                              style={{
                                fontWeight: "600",
                                fontSize: "18px",
                                paddingTop: "0px",
                              }}
                            >
                              Comment
                            </h6>
                            <textarea
                              placeholder="Send your comments"
                              style={{
                                marginLeft: "16px",
                                width: "356px",
                                height: "131px",
                                resize: "none",
                              }}
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            ></textarea>
                            <br></br>
                          </div>
                          <button
                            style={{
                              marginLeft: "105px",
                              background: "#e91e63",
                            }}
                            type="submit"
                          >
                            Submit
                          </button>
                        </form>
                      ) : (
                        <p style={{ fontSize: "19px" }}>
                          Please{" "}
                          <Link
                            style={{
                              color: "white",
                              textTransform: "capitalize",
                              margin: "0px 1px",
                              fontWeight: "600",
                            }}
                            to="/login"
                          >
                            {" "}
                            sign in{" "}
                          </Link>{" "}
                          to write a review
                        </p>
                      )}
                      {/* <p>
                          Please <a href="#">sign-in</a> to write a review
                        </p> */}
                    </div>
                    {/* </NavLink> */}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default ProductPage;
