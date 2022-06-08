import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Product from "./Product.js";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./actions/productActions";
import { NavLink, Link } from "react-router-dom";
export default function Cari({ match, history }, props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  // var num = 4;
  var film = products.slice(58, 62);
  // let url =

  // function getMultipleRandom(products, film) {
  //   const shuffled = [...products].sort(() => 0.5 - Math.random());
  //   return shuffled.slice(57, film);
  // }
  function getSingleRandom(film, num) {
    var film = products.slice(84, 107);
    const shuffled = film.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
    // console.log(film);
    // return film;
  }

  // const shuffled = products.sort(() => 0.5 - Math.random());
  // selected = shuffled.slice(0, n);

  return (
    <Carousel
      showIndicators={true}
      showStatus={false}
      interval={2000}
      autoPlay={true}
      infiniteLoop={true}
      preventMovementUntilSwipeScrollTolerance={false}
      stopOnHover={false}
    >
      {getSingleRandom(products, 4).map((product) => (
        // {/* {film.map((product) => ( */}
        <div className="contain">
          <img className="images" src={product.image} />
          <div className="description">
            <h1 className="xv">{product.name}</h1>
            <h6 style={{ color: "#f10808", fontSize: "27px" }} className="xv">
              {product.brand}
            </h6>
            <h6 style={{ fontSize: "22px" }} className="xv">
              Rs.{product.price}
            </h6>
            {/* <p className="xv">In Stock.</p> */}
            {/* <NavLink
              activeClassName="is-active"
              exact={true}
              className="nav-link"
              to={`/product/${product._id}`}
            > */}
            {/* <Link to={product.link}> */}
            <a href={product.link} target="_blank">
              <button className="carting">
                BUY NOW
                <i
                  style={{ marginLeft: "11px", fontSize: "17px" }}
                  class="fa fa-arrow-right"
                ></i>
              </button>
            </a>
            {/* </Link> */}
            {/* </NavLink> */}
            <div>
              <NavLink
                activeClassName="is-active"
                exact={true}
                className="nav-link"
                to={`/trendingproducts`}
              >
                <button className="carting">
                  SEE MORE
                  <i
                    style={{ marginLeft: "11px", fontSize: "17px" }}
                    class="fa fa-arrow-right"
                  ></i>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
