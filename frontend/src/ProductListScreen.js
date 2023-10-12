import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import Loader from "./Loader.js";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "./actions/productActions.js";
import { PRODUCT_CREATE_RESET } from "./constants/productConstants";
import "./userlist.css";
const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //   const userDelete = useSelector((state) => state.userDelete);
  //   const { success: successDelete } = userDelete;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userInfo.isAdmin) {
      history.push("/login");
    }
    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
  ]);

  const deleteHandler = (id) => {
    console.log("delete");
    if (window.confirm("Are you sure")) {
      dispatch(deleteProduct(id));
    }
  };
  const createProductHandler = () => {
    dispatch(createProduct());
  };
  return (
    <>
      {" "}
      <div
        style={{ paddingTop: "71px", paddingBottom: "65px" }}
        className="for-center"
      >
        <div style={{ marginLeft: "0px" }} className="sections">
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <h1>Products</h1>
            <button
              style={{
                background: "#101e87",
                color: "white",
                padding: "10px 10px",
                fontSize: "16px",
                cursor: "pointer",
              }}
              onClick={createProductHandler}
            >
              <i style={{ marginRight: "8px" }} className="fa fa-plus"></i>
              Create Product
            </button>
          </div>
          {loadingDelete && <Loader />}
          {errorDelete && <Message variant="danger">{errorDelete}</Message>}
          {loadingCreate && <Loader />}
          {errorCreate && <Message variant="danger">{errorCreate}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <div>{error}</div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #41c4ff" }}>ID</th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}>NAME</th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}>PRICE</th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}>CATEGORY</th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}>BRAND</th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td
                      style={{ border: "1px solid #41c4ff", borderTop: "0px" }}
                    >
                      {product._id}
                    </td>
                    <td
                      style={{
                        borderRight: "1px solid #41c4ff",
                        width: "300px",
                      }}
                    >
                      {product.name}
                    </td>
                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      Rs.{product.price}
                    </td>
                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      {product.category}
                    </td>
                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      {product.brand}
                    </td>
                    <td
                      style={{
                        borderRight: "1px solid #41c4ff",
                        display: "flex",
                      }}
                    >
                      <Link to={`/admin/product/${product._id}/edit`}>
                        <button className="details">
                          <i
                            className="fa fa-edit"
                            style={{ fontSize: "24px" }}
                          ></i>
                        </button>
                      </Link>
                      <button
                        className="list-button"
                        onClick={() => deleteHandler(product._id)}
                      >
                        <i
                          className="fa fa-trash"
                          style={{ fontSize: "24px" }}
                        ></i>
                      </button>
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
export default ProductListScreen;
