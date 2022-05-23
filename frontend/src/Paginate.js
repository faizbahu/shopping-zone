import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <div>
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <div active={x + 1 === page}>{x + 1}</div>
          </Link>
        ))}
      </div>
      //     <Pagination>
      //       <Pagination.Prev />
      //       <Pagination.Ellipsis />
      //       <Pagination.Item>{3}</Pagination.Item>
      //       <Pagination.Item>{4}</Pagination.Item>
      //       <Pagination.Item>{5}</Pagination.Item>
      //       <Pagination.Ellipsis />
      //       <Pagination.Next />
      //     </Pagination>
    )
  );
};

export default Paginate;
