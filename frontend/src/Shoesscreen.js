import React, { useState, useEffect } from "react";
import Footer from "./Footer.js";
import { NavLink, Link } from "react-router-dom";
import Rating from "./Rating";
import axios from "axios";
import Shoes from "./shoes.js";
import Product from "./Product.js";
export default function Shoesscreen(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  var filmt = products.slice(14, 30);
  console.log(filmt);
  return (
    <div>
      <div className="for-products">
        <div className="listing-products">
          {filmt.map((product) => (
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
