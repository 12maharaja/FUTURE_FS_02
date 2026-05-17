import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBoxOpen,
  FaHeart,
  FaSignOutAlt,
} from "react-icons/fa";


function ProfilePage() {
  const user = {
    name: "Cristiano Raja",
    email: "cristiano@gmail.com",
    phone: "+91 98765 43210",
    address: "Chennai, India",
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        {/* LEFT SIDE */}
        <div className="profile-left">
          <div className="profile-image">
            <FaUser />
          </div>

          <h2>{user.name}</h2>

          <p className="profile-role">Premium Customer</p>

          <button className="edit-btn">Edit Profile</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="profile-right">
          <h3>Personal Information</h3>

          <div className="profile-info">
            <div className="info-box">
              <FaEnvelope className="info-icon" />

              <div>
                <span>Email</span>
                <p>{user.email}</p>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="info-icon" />

              <div>
                <span>Phone</span>
                <p>{user.phone}</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="info-icon" />

              <div>
                <span>Address</span>
                <p>{user.address}</p>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="profile-actions">
            <div className="action-card">
              <FaBoxOpen className="action-icon" />
              <h4>My Orders</h4>
            </div>

            <div className="action-card">
              <FaHeart className="action-icon" />
              <h4>Wishlist</h4>
            </div>

            <div className="action-card logout-card">
              <FaSignOutAlt className="action-icon" />
              <h4>Logout</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
