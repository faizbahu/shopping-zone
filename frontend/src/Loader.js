import React from "react";
// import { Spinner } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
const Loader = () => {
  return (
    <ClipLoader
    loading={true}
    size={150}
    style={{justifyContent:"center"}}
    >
      <span className="sr-only">Loading...</span>
    </ClipLoader>
  );
};

export default Loader;
