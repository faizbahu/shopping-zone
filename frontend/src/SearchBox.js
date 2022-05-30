import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./search.css";
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="search-products"
        ></input>
        <button
          style={{
            marginLeft: "0px",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
          }}
          className="search-button"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBox;
