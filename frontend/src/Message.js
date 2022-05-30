import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return (
    <>
      <p
        style={{
          fontSize: "19px",
          background: "rgb(225, 32, 32)",
          padding: "10px",
          margin: "10px",
          color: "white",
          marginTop: "9px",
          marginLeft: "0px",
        }}
      >
        {children}
      </p>
    </>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
