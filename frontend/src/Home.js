import React, { useState, useEffect } from "react";
import "./home.css";
import Footer from "./Footer.js";
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import shirt from "./images/f11.jpg";
// import Rating from "./Rating";
import axios from "axios";
import Product from "./Product.js";
// import ProductPage from "./ProductPage";
export default function Home(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  // const addToCartHandler=()=>{
  //   history.push(`/cart/${match.params._id}`)
  // }
  const i=3;
  var film = products.slice(8, 12);
  console.log(film)
  return (
    <React.Fragment>
      <div className="top1-div">
        <div className="container1">
          <Carousel
            showIndicators={true}
            showStatus={false}
            interval={2000}
            autoPlay={true}
            infiniteLoop={true}
            preventMovementUntilSwipeScrollTolerance={false}
            stopOnHover={false}
          >
          {film.map((product) => (
            <div className="contain">
              <img className="images" src={product.image} />
            <div className="description">
            
           <h1 className="xv">{product.name}</h1> 
           <h6 className="xv">RS.{product.price}</h6>
           <p className="xv">In Stock.</p>
           <NavLink
                  activeClassName="is-active"
                  exact={true}
                  className="nav-link"
                  to={`/product/${product._id}`}
                >
                  <button className="carting">ADD TO CART</button>
                </NavLink>
           </div> 
           </div>
           ))}
            </Carousel>
        </div>
      </div>
      <div className="for-products">
        <h1>TOP RATED PRODUCTS</h1>
        <div className="listing-products">
          {products.map((product) => (
            <Product product={product}key={product._id} />
          ))}
        </div>
        </div>
      <Footer />
    </React.Fragment>
  );
}
           {/* <div className="contain">
              <img
                className="images"
                src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0026103618_3_1024x1024.jpg?v=1634816552"
                alt="https://cdn.shopify.com/s/files/1/2290/7887/products/F0010103902_2_1024x1024.jpg?v=1634995728"
              />
              <div className="description">
                <h1>Relax Fit Checkered Shirt</h1>
                <h6>2,000.00</h6>
                <p>In Stock.</p>

                <NavLink
                  activeClassName="is-active"
                  exact={true}
                  className="nav-link"
                  to="/cart"
                >
                  <button>ADD TO CART</button>
                </NavLink>
              </div>
            </div> */}
              {/* <img
                className="images"
                src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0018103618_2_1024x1024.jpg?v=1635339259"
                alt=""
              />
              
                <h1>Relax Fit Shirt</h1>
                <h6>2,000.00</h6>
                <p>In Stock.</p>
                <NavLink
                  activeClassName="is-active"
                  exact={true}
                  className="nav-link"
                  to="/cart"
                >
                  <button>ADD TO CART</button>
                </NavLink>
              */}
            
            
            {/* <div className="contain">
              <img
                className="images"
                src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0018103702_3_1024x1024.jpg?v=1635010890"
                alt=""
              />
              <div className="description">
                <h1>Fit Button Down Shirt</h1>
                <h6>2,000.00</h6>
                <p>In Stock.</p>
                <NavLink
                  activeClassName="is-active"
                  exact={true}
                  className="nav-link"
                  to="/cart"
                >
                  <button>ADD TO CART</button>
                </NavLink>
              </div>
            </div> */}
         

      
        {/* <div className="listing-products">
          {products.map((product, id) => (
            <div className="products" key={id}>
              <NavLink
                activeClassName="is-active"
                exact={true}
                className="nav-link"
                to="/productpage:id"
              > 
                <img src={product.image} />
                <p>{product.sale}</p>
                <h3>{product.name}</h3>
                <h2>{product.price}</h2>
                <div className="checking">
                  <Rating value={product.rating} />
                </div>
              </NavLink>
            </div>
          ))}
        </div> */}
   
{
  /* <div className="products">
            <NavLink
              activeClassName="is-active"
              exact={true}
              className="nav-link"
              to="/productpage"
            >
              <img
                src="https://furorjeans.com/media/catalog/product//0/n/0n9a7125-31525.jpg"
                alt=""
              />
              <p className="for-sale">30%</p>
              <h3>FMTS21-31528 - Rust</h3>
              <h2>PKR 2584.00</h2>
              <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star-half-o checked"></span>
              <span class="fa fa-star"></span>
              </div>
            </NavLink>
          </div>
          <div className="products">
            <img
              src="https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_8152_360x.jpg?v=1629835668"
              alt=""
            />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>
          <div className="products">
            <img src={shirt} alt="" />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>
          <div className="products">
            <img
              src="https://furorjeans.com/media/catalog/product//i/m/img_5834-31528.jpg"
              alt=""
            />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star-half-o checked"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>
          <div className="products">
            <img
              src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0021103901_2_cf32b4b2-b0ed-420a-8e8c-c92326c1c0dc_1024x1024.jpg?v=1636027614"
              alt=""
            />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star-half-o checked"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>

          


          <div className="products">
            <img
              src="https://furorjeans.com/media/catalog/product//i/m/img_5729-31512_4.jpg"
              alt=""
            />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star-half-o checked"></span>
              </div>
          </div>

          

          <div className="products">
            <img
              src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0035103305_1_1024x1024.jpg?v=1635064667"
              alt=""
            />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>
          <div className="products">
            <img
              src="https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_3038_360x.jpg?v=1631977176"
              alt=""
            />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star-half-o checked"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>
          <div className="products">
            <NavLink
              activeClassName="is-active"
              exact={true}
              className="nav-link"
              to="/productpage"
            >
              <img
                src="https://furorjeans.com/media/catalog/product//0/n/0n9a7125-31525.jpg"
                alt=""
              />
              <p className="for-sale">30%</p>
              <h3>FMTS21-31528 - Rust</h3>
              <h2>PKR 2584.00</h2>
              <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              </div>
            </NavLink>
          </div>
          <div className="products">
            <img
              src="https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_8152_360x.jpg?v=1629835668"
              alt=""
            />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>
          <div className="products">
            <img src={shirt} alt="" />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star-half-o checked"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>
          <div className="products">
            <img
              src="https://furorjeans.com/media/catalog/product//i/m/img_5834-31528.jpg"
              alt=""
            />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>
          <div className="products">
            <img
              src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0021103901_2_cf32b4b2-b0ed-420a-8e8c-c92326c1c0dc_1024x1024.jpg?v=1636027614"
              alt=""
            />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>
          <div className="products">
            <img
              src="https://furorjeans.com/media/catalog/product//i/m/img_5729-31512_4.jpg"
              alt=""
            />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>
          <div className="products">
            <img
              src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0035103305_1_1024x1024.jpg?v=1635064667"
              alt=""
            />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star-half-o checked"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>
          <div className="products">
            <img
              src="https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_3038_360x.jpg?v=1631977176"
              alt=""
            />
            <p className="for-sale">30%</p>
            <h3>FMTS21-31528 - Rust</h3>
            <h2>PKR 2584.00</h2>
            <div className="checking">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              <span class="fa fa-star black"></span>
              </div>
          </div>*/
}
