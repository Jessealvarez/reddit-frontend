import React from "react";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import { loginUser } from "../Auth";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuthLoading, isAuthLoading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="divider"></div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            const newUserName = event.target.value;
            setUsername(newUserName);
          }}
        ></input>

        <br />
        <br />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => {
            const newPassword = event.target.value;
            setPassword(newPassword);
          }}
        ></input>

        <br />
        <br />

        <button
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
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
