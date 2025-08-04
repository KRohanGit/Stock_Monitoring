import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
    
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://stock-monitoring-production.up.railway.app/auth/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        console.log("Login successful, navigating to dashboard");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("An error occurred during login");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow" style={{ width: "400px" }}>
        <div className="card-body p-4">
          <h2 className="text-center text-primary mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Login
            </button>
            <div className="text-center">
              <span>Don't have an account? </span>
              <Link to="/signup" className="text-decoration-none">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
