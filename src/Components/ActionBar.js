import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ActionBar.css";

function ActionBar() {
  const navigate = useNavigate();
  return (
    <div className="center-me">
      <nav className="action-bar">
        {/* <li> */}
        <Button
          class="btn btn-light"
          onClick={() => {
            navigate("/new-post");
          }}
        >
          New Post
        </Button>
        {/* <Link className="nav-option" to="/new-post">
            New Post
          </Link> */}
        {/* </li>
        <li> */}
        <Button
          class="btn btn-light"
          onClick={() => {
            navigate("/post-manager");
          }}
        >
          Post Manager
        </Button>
        {/* <Link className="nav-option" to="/post-manager">
            Post Manager
          </Link> */}
        {/* </li> */}
        <Outlet />
      </nav>
    </div>
  );
}

export default ActionBar;
