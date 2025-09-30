import React from "react";

function Footer(){
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>About Us</p>
          <p>Contact</p>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <p>Help & Support</p>
          <p>Returns</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 FitFearz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
