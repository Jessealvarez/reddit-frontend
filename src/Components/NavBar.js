import React from "react";
import { Outlet, Link } from "react-router-dom";
import { getUserToken, logoutUser } from "../Auth";
import { useState, useEffect } from "react";
import "./NavStyle.css";
import { Button } from "react-bootstrap";

const NavBar = ({ isAuthLoading, setIsAuthLoading }) => {
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const userToken = getUserToken();
    setUserToken(userToken);
  }, [isAuthLoading]);

  return (
    <nav className="navbar">
      <a href="/" className="title">
        Reddit Clone
      </a>
      <ul>
        {!userToken && (
          <div>
            <li>
              <Link className="nav-option" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-option" to="/registration">
                Registration
              </Link>
            </li>
          </div>
        )}
      </ul>
      {userToken && (
        <div>
          <Button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              logoutUser();
            }}
          >
            Logout
          </Button>
        </div>
      )}
      <Outlet />
    </nav>
  );
};

export default NavBar;
