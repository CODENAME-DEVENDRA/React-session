import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard", { replace: true });
  };

  return (
    <div>
      <p>Login Page</p>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Login;
