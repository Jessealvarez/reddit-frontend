import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./ActionBar.css";

function ActionBar() {
  return (
    <div className="center-me">
      <nav className="action-bar">
        <li>
          <Link className="nav-option" to="/new-post">
            New Post
          </Link>
        </li>
        <li>
          <Link className="nav-option" to="/post-manager">
            Post Manager
          </Link>
        </li>
        <Outlet />
      </nav>
    </div>
  );
}

export default ActionBar;
