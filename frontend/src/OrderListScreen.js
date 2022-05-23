import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import Loader from "./Loader.js";
import { listOrders } from "./actions/orderActions.js";
import "./userlist.css";
const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.orderList);
  const { loading, error, orders } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //   const userDelete = useSelector((state) => state.userDelete);
  //   const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      {" "}
      <div
        style={{ paddingTop: "71px", paddingBottom: "65px" }}
        className="for-center"
      >
        <div className="sections">
          <h1>Orders</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <div>{error}</div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #41c4ff" }}>ID</th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}>User</th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}>DATE</th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}>TOTAL</th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}>PAID</th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}>
                    DELIVERED
                  </th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td
                      style={{ border: "1px solid #41c4ff", borderTop: "0px" }}
                    >
                      {order._id}
                    </td>
                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      {order.user && order.user.name}
                    </td>
                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      {order.createdAt.substring(0, 10)}
                    </td>
                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      Rs.{order.totalPrice}
                    </td>
                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className="fa fa-times"
                          style={{ color: "red", fontSize: "24px" }}
                        ></i>
                      )}
                    </td>
                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      {order.isDelivered ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <i
                          className="fa fa-times"
                          style={{ color: "red", fontSize: "24px" }}
                        ></i>
                      )}
                    </td>

                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      <Link to={`/order/${order._id}/edit`}>
                        <button className="details">Details</button>
                      </Link>
                      {/* <button
                        className="list-button"
                        onClick={() => deleteHandler(user._id)}
                      >
                        <i
                          className="fa fa-trash"
                          style={{ fontSize: "24px" }}
                        ></i>
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
export default OrderListScreen;
