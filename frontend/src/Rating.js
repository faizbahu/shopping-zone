import React from 'react';

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span>
        <i
          className={
            value >= "1"
              ? "fa fa-star checked"
              : value >= 0.5
              ? "fa fa-star-half-o checked"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= "2"
              ? "fa fa-star checked"
              : value >= 1.5
              ? "fa fa-star-half-o checked"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= "3"
              ? "fa fa-star checked"
              : value >= 2.5
              ? "fa fa-star-half-o checked"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= "4"
              ? "fa fa-star checked"
              : value >= 3.5
              ? "fa fa-star-half-o checked"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= "5"
              ? "fa fa-star checked"
              : value >= 4.5
              ? "fa fa-star-half-o checked"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span style={{ marginLeft: "8px" }}>{text && text}</span>
    </div>
  );
};
export default Rating;
