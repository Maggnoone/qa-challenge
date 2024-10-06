import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const API_URL = process.env.REACT_APP_API_URL;
    const response = await fetch(`${API_URL}/api/User/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setMessage(`Logged in with token: ${data.token}`);
    } else {
      setMessage("Login failed");
    }
  };

  return (
    <div>
      <h2 data-cy="login-list-title">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        data-cy="login-input-username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        data-cy="login-input-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button data-cy="login-button" onClick={handleLogin}>
        Login
      </button>
      <p data-cy="login-message">{message}</p>
    </div>
  );
};

export default Login;
