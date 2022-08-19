import React from "react";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { registerUser, loginUser } from "../Auth";

const RegistrationPage = ({ setIsAuthLoading, isAuthLoading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <NavBar />
        <div className="divider"></div>
      </div>
      <div className="registration-card">
        <Form>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="text-center"
            type="email"
            placeholder="Enter a valid email:"
          /> */}
          {/* </Form.Group> */}
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

          <Button
            variant="primary"
            type="submit"
            onClick={async () => {
              setIsAuthLoading(true);
              const isUserRegistered = await registerUser(username, password);
              if (isUserRegistered) {
                const isUserLoggedIn = await loginUser(username, password);
                console.log("user registered");
                if (isUserLoggedIn) {
                  setIsAuthLoading(false);
                  console.log("user Logged In");
                  navigate("/");
                }
              }
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationPage;
