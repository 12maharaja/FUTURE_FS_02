import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      alert(`Logged in as ${email}`);
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* LEFT SIDE */}
        <div className="login-left">
          <h1>FitGearz</h1>

          <p>
            Welcome back! Login to continue shopping premium sports and gym
            products.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
            alt="fitness"
          />
        </div>

        {/* RIGHT SIDE */}
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          {/* EMAIL */}
          <div className="form-group">
            <label>Email</label>

            <div className="input-box">
              <FaEnvelope className="input-icon" />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="form-group">
            <label>Password</label>

            <div className="input-box">
              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* OPTIONS */}
          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <span className="forgot-password">Forgot Password?</span>
          </div>

          {/* BUTTON */}
          <button type="submit" className="login-btn">
            Login
          </button>

          {/* SIGNUP */}
          <p className="signup-link">
            Don’t have an account?
            <Link to="/signup"> Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
