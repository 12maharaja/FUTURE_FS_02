import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");

    console.log("✅ Signup success:", formData);

    alert("Account Created Successfully 🎉");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* LEFT SIDE */}
        <div className="signup-left">
          <h1>FitGearz</h1>

          <p>
            Join FitGearz today and explore premium fitness, sports, and gym
            products.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
            alt="signup"
          />
        </div>

        {/* RIGHT SIDE */}
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          {error && <p className="error">{error}</p>}

          {/* USERNAME */}
          <div className="form-group">
            <label>Username</label>

            <div className="input-box">
              <FaUser className="input-icon" />

              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label>Email</label>

            <div className="input-box">
              <FaEnvelope className="input-icon" />

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
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
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="form-group">
            <label>Confirm Password</label>

            <div className="input-box">
              <FaLock className="input-icon" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <span
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* BUTTON */}
          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          {/* LOGIN */}
          <p className="login-link">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
