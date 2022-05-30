import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer.js";
import { NavLink, Link } from "react-router-dom";
import Rating from "./Rating";
import Loader from "./Loader";
import Message from "./Message.js";
import axios from "axios";
// import Shoes from "./shoes.js";
import Product from "./Product.js";
export default function TrendingProducts(props) {
  const [products, setProducts] = useState([]);
  const productList = useSelector((state) => state.productList);
  const { loading, error } = productList;
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  //   var num = 56;
  function getMultipleRandom(film, num) {
    var film = products.slice(84, 88);
    const shuffled = film.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <div className="for-products">
            <div className="listing-products">
              {/* {filmt.map((product) => ( */}
              {getMultipleRandom(products, 4).map((product) => (
                <Link
                  activeClassName="is-active"
                  className="nav-link"
                  to={`/product/${product._id}`}
                >
                  <div className="products">
                    <img
                      style={{
                        objectFit: "contain",
                        background: "white",
                        dislay: "none",
                      }}
                      src={product.image}
                    />
                    {/* <p style={{ background: "red" }}>{product.sale}</p> */}
                    <h3>{product.name}</h3>
                    <h2>Rs.{product.price}</h2>
                    <div className="checking">
                      <Rating value={product.rating} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
