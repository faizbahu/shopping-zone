import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import Loader from "./Loader";
import FormContainer from "./FormContainer.js";
import { listProductDetails, updateProduct } from "./actions/productActions.js";
import "./signup.css";
import { PRODUCT_UPDATE_RESET } from "./constants/productConstants";
// import ProductListScreen from "./ProductListScreen";

export const ProductEditScreen = ({ match, history }) => {
  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;
  const productId = match.params.id;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    );
  };

  return (
    <>
      <div
        className="for-center"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "148px",
          paddingTop: "148px",
        }}
      >
        {/* {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />} */}
        {loading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <form className="form-class" onSubmit={submitHandler}>
            <h3>Edit Product</h3>
            {loadingUpdate && <Loader />}
            {errorUpdate && <div>{errorUpdate}</div>}
            <div className="form-group">
              {/* <i class="zmdi zmdi-account icon-"></i> */}
              <label
                style={{ color: "white", marginLeft: "6px", fontSize: "17px" }}
                for="admin"
              >
                Name
              </label>
              <br></br>
              <input
                type="name"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label
                style={{ color: "white", marginLeft: "6px", fontSize: "17px" }}
                for="admin"
              >
                Price
              </label>
              <br></br>
              <input
                style={{
                  padding: "8px 130px 10px 12px",
                  fontSize: "15px",
                  background: "none",
                  border: "none",
                  borderBottom: "2px solid rgb(65, 196, 255)",
                  width: "410px",
                  padding: "10px 19px",
                  outline: "none",
                }}
                type="number"
                className="form-control"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label
                style={{ color: "white", marginLeft: "6px", fontSize: "17px" }}
                for="admin"
              >
                Image
              </label>
              <br></br>
              <input
                type="text"
                style={{
                  padding: "8px 130px 10px 12px",
                  fontSize: "15px",
                  background: "none",
                  border: "none",
                  borderBottom: "2px solid rgb(65, 196, 255)",
                  width: "410px",
                  padding: "10px 19px",
                  outline: "none",
                  marginLeft: "1px",
                }}
                className="form-control"
                label="Is Admin"
                value={image}
                placeholder="Enter image URL"
                //  checked={isAdmin}
                onChange={(e) => setImage(e.target.value)}
              />
              <br></br>

              <input
                style={{
                  padding: "8px 130px 10px 12px",
                  fontSize: "15px",
                  background: "none",
                  border: "none",
                  borderBottom: "2px solid rgb(65, 196, 255)",
                  width: "410px",
                  padding: "10px 19px",
                  outline: "none",
                  marginLeft: "1px",
                  // display: "none",
                }}
                type="file"
                id="image-file"
                onChange={uploadFileHandler}
              />
              <label
                style={{
                  color: "white",
                  border: "none",
                  background: "#25bbff",
                  color: "white",
                  padding: "10px 27px",
                  fontSize: "17px",
                  fontWeight: "600",
                  cursor: "pointer",
                  borderRadius: "6px",
                  marginLeft: "10px",
                }}
                for="image-file"
                class="custom-file-upload"
              >
                Browse
              </label>
              {uploading && <Loader />}
            </div>
            <div className="form-group">
              <label
                style={{ color: "white", marginLeft: "6px", fontSize: "17px" }}
                for="admin"
              >
                Brand
              </label>
              <br></br>
              <input
                type="text"
                style={{
                  padding: "8px 130px 10px 12px",
                  fontSize: "15px",
                  background: "none",
                  border: "none",
                  borderBottom: "2px solid rgb(65, 196, 255)",
                  width: "410px",
                  padding: "10px 19px",
                  outline: "none",
                  marginLeft: "1px",
                }}
                placeholder="Enter brand"
                className="form-control"
                label="Is Admin"
                value={brand}
                //  checked={isAdmin}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label
                style={{ color: "white", marginLeft: "6px", fontSize: "17px" }}
                for="admin"
              >
                Count In Stock
              </label>
              <br></br>
              <input
                type="number"
                style={{
                  padding: "8px 130px 10px 12px",
                  fontSize: "15px",
                  background: "none",
                  border: "none",
                  borderBottom: "2px solid rgb(65, 196, 255)",
                  width: "410px",
                  padding: "10px 19px",
                  outline: "none",
                  marginLeft: "1px",
                }}
                className="form-control"
                placeholder="Enter count in stock"
                label="Is Admin"
                value={countInStock}
                //  checked={isAdmin}
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </div>
            <div
              style={{
                alignItems: "center",

                width: "436px",
                display: "flex",
                padding: "12px 6px",
                borderBottom: "2px solid rgb(65, 196, 255)",
              }}
              className="form-group"
            >
              <h6
                style={{ color: "white", marginLeft: "6px", fontSize: "17px" }}
                for="admin"
              >
                Category
              </h6>
              <select
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  color: "black",
                  marginLeft: "15px",
                }}
              >
                <option>Select</option>
                <option>Shirts</option>
                <option>Shoes</option>
                <option>Mens Jeans</option>
                <option>Kids Wear</option>
              </select>
              <br></br>
              {/* <input
                type="text"
                style={{
                  padding: "8px 130px 10px 12px",
                  fontSize: "15px",
                  background: "none",
                  border: "none",
                  borderBottom: "2px solid rgb(65, 196, 255)",
                  width: "410px",
                  padding: "10px 19px",
                  outline: "none",
                  marginLeft: "1px",
                }}
                className="form-control"
                label="Is Admin"
                placeholder="Enter category"
                value={category}
                //  checked={isAdmin}
                onChange={(e) => setCategory(e.target.value)}
              /> */}
            </div>
            <div className="form-group">
              <label
                style={{ color: "white", marginLeft: "6px", fontSize: "17px" }}
                for="admin"
              >
                Description
              </label>
              <br></br>
              <input
                type="text"
                style={{
                  padding: "8px 130px 10px 12px",
                  fontSize: "15px",
                  background: "none",
                  border: "none",
                  borderBottom: "2px solid rgb(65, 196, 255)",
                  width: "410px",
                  padding: "10px 19px",
                  outline: "none",
                  marginLeft: "1px",
                }}
                className="form-control"
                placeholder="Enter description"
                label="Is Admin"
                value={description}
                //  checked={isAdmin}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <Button type="submit" variant="primary">
              Update
            </Button>
            <Button>
              <Link style={{ color: "white" }} to="/admin/productlist">
                Go Back
              </Link>
            </Button>
          </form>
        )}
      </div>
    </>
  );
};

export default ProductEditScreen;
