import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* BRAND */}
        <div className="footer-section">
          <h2 className="footer-logo">FitGearz</h2>

          <p className="footer-desc">
            Your one-stop destination for premium sports, fitness, and gym
            equipment.
          </p>

          <div className="footer-contact">
            <p>
              <FaPhoneAlt className="footer-icon" />
              +91 98765 43210
            </p>

            <p>
              <FaEnvelope className="footer-icon" />
              support@fitgearz.com
            </p>

            <p>
              <FaMapMarkerAlt className="footer-icon" />
              Chennai, India
            </p>
          </div>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="footer-section">
          <h3>Customer Service</h3>

          <p>Help & Support</p>
          <p>Returns & Refunds</p>
          <p>Shipping Info</p>
          <p>Track Order</p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <p>About Us</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <span>
              <FaFacebookF />
            </span>

            <span>
              <FaInstagram />
            </span>

            <span>
              <FaTwitter />
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 FitGearz. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
