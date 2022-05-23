import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import Loader from "./Loader.js";
import { listUsers, deleteUser } from "./actions/userAction";
import "./userlist.css";
const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete]);

  const deleteHandler = (id) => {
    console.log("delete");
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <>
      {" "}
      <div
        style={{ paddingTop: "71px", paddingBottom: "65px" }}
        className="for-center"
      >
        <div className="sections">
          <h1>Users</h1>
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
                  <th style={{ borderRight: "1px solid #41c4ff" }}>EMAIL</th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}>ADMIN</th>
                  <th style={{ borderRight: "1px solid #41c4ff" }}></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td
                      style={{ border: "1px solid #41c4ff", borderTop: "0px" }}
                    >
                      {user._id}
                    </td>
                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      {user.name}
                    </td>
                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      <a
                        style={{ color: "white" }}
                        href={`mail to:${user.email}`}
                      >
                        {user.email}
                      </a>
                    </td>
                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      {user.isAdmin ? (
                        <i
                          className="fa fa-check"
                          style={{ color: "#0ff50f", fontSize: "24px" }}
                        ></i>
                      ) : (
                        <i
                          className="fa fa-times"
                          style={{ color: "red", fontSize: "24px" }}
                        ></i>
                      )}
                    </td>

                    <td style={{ borderRight: "1px solid #41c4ff" }}>
                      <Link to={`/admin/user/${user._id}/edit`}>
                        <button className="details">
                          <i
                            className="fa fa-edit"
                            style={{ fontSize: "24px" }}
                          ></i>
                        </button>
                      </Link>
                      <button
                        className="list-button"
                        onClick={() => deleteHandler(user._id)}
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
export default UserListScreen;
