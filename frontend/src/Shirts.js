import React, { useState, useEffect } from "react";
import Footer from "./Footer.js";
import { NavLink, Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "react-js-pagination";
import axios from "axios";
import { listProducts } from "./actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product.js";
export default function Shirts(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  function getSingleRandom(film, num) {
    var film = products.slice(0, 23);
    const shuffled = film.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
    // console.log(film);
    // return film;
  }

  var filmt = products.slice(1, 13);
  console.log(filmt);
  return (
    <div>
      <div className="for-products">
        <div className="listing-products">
          {getSingleRandom(products, 20).map((product) => (
            <Link
              activeClassName="is-active"
              className="nav-link"
              to={`/product/${product._id}`}
            >
              <div className="products">
                <img
                  style={{ objectFit: "contain", background: "white" }}
                  src={product.image}
                />
                <p>{product.sale}</p>
                <h3>{product.name}</h3>
                <h2>Rs.{product.price}</h2>
                <div className="checking">
                  <Rating value={product.rating} />
                </div>
              </div>
            </Link>
          ))}
          {/* <div className="listing-products">
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
