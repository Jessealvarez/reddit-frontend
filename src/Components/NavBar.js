import React from "react";
import { Outlet, Link } from "react-router-dom";
import { getUserToken, logoutUser } from "../Auth";
import { useState, useEffect } from "react";
import "./NavStyle.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = ({ isAuthLoading, setIsAuthLoading }) => {
  const navigate = useNavigate();
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const userToken = getUserToken();
    setUserToken(userToken);
  }, [isAuthLoading]);

  return (
    <nav className="navbar">
      {/* <a href="/" className="title">
        Reddit Clone
      </a> */}
      <div
        id="logo-bar"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="/reddit.PNG" id="reddit" />
        <img src="/logo.PNG" id="logo" />
        <img src="/clone.PNG" id="clone" />
      </div>
      <div id="search-bar">
        <input type="text" placeholder="search" />
      </div>
      <ul>
        {!userToken && (
          <div>
            <Button
              class="btn btn-light"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>

            <Button
              class="btn btn-light"
              onClick={() => {
                navigate("/registration");
              }}
            >
              Sign Up
            </Button>
          </div>
        )}
      </ul>
      {userToken && (
        <div>
          <Button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              logoutUser();
              navigate("/");
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
