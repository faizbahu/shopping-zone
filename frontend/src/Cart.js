import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Footer from './Footer.js';
import './cart.css';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import Message from './Message'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart, removeFromCart } from './actions/cartActions'
const Cart = ({ match, location, history }) => {
  const productId= match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  console.log(`quantity${qty}//prodcuctid${match.params.id}`)
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cartItems)
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch((removeFromCart(id)))
  }

  const checkoutHandler = () => {
    history.push('/signin?redirect=shipping')
  }
  return (
    <div>
      <h1 className="header">Shopping Cart</h1>
      <div className="cart-page">
        {cartItems.length === 0 ? (
          <div className="empty">
          <p>
            Your cart is empty
          </p>
          <Link to='/'><button>GO BACK</button></Link>
          </div>):(
            <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <div className="items-cart">
                  <div className="items-item">
                    <img  src={item.image} alt={item.name}/>
                    <p className="item-name"><Link style={{"fontSize":"17px"}} to={`/product/${item.product}`}>{item.name}</Link></p>
                    <p className="price2">Rs.{item.price}</p>
                    <Form.Control

                      as='select'
                      className="quantity"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                    <button
                    className="trash-button"
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fa fa-trash trash'></i>
                    </button>
                  </div>
                  
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          )}
       
      <div>
        <div class="subtotal"style={{
                borderTopLeftRadius: "14px",
                borderTopRightRadius: "14px",
              }}>
          <h6>SUBTOTAL  ({cartItems.reduce((acc,item)=>acc+item.qty,0)})  ITEMS</h6>
          
        </div>
        <div class="subtotal">
          <h5>Total Price</h5>
          <p>Rs.{cartItems.reduce((acc,item)=>acc+item.qty*item.price,0)}</p>
        </div>
        <div class="subtotal1"style={{
                borderBottomLeftRadius: "14px",
                borderBottomRightRadius: "14px",
              }}>
          <button className="checkout" disabled={cartItems.length==0} onClick={checkoutHandler}>Proceed to checkout</button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
    
  )
}
export default Cart;
