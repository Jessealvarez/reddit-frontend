import React from "react";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import { loginUser } from "../Auth";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const LoginPage = ({ setIsAuthLoading, isAuthLoading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="divider"></div>
      <div id="login-page">
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="text-center"
            type="input"
            placeholder="Enter a username:"
            value={username}
            onChange={(event) => {
              const newUserName = event.target.value;
              setUsername(newUserName);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="text-center"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              const newPassword = event.target.value;
              setPassword(newPassword);
            }}
          />
        </Form.Group>
        {/* <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            const newUserName = event.target.value;
            setUsername(newUserName);
          }}
        ></input>

        <br />
        <br /> */}

        {/* <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => {
            const newPassword = event.target.value;
            setPassword(newPassword);
          }}
        ></input>

        <br />
        <br /> */}

        <Button
          id="login"
          type="submit"
          onClick={async () => {
            setIsAuthLoading(true);
            const isUserLoggedIn = await loginUser(username, password);
            if (isUserLoggedIn) {
              setIsAuthLoading(false);
              navigate("/");
            }
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
