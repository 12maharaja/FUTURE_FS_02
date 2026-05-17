import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Jersey" },
    { id: 2, name: "Boot" },
    { id: 3, name: "Cricket Helmet" },
    { id: 4, name: "Volley Ball" },
    { id: 5, name: "Cricket Bat" },
    { id: 6, name: "Dumbbell" },
    { id: 7, name: "Barbell" },
    { id: 8, name: "Treadmill" },
    { id: 9, name: "Gym Bench" },
    { id: 10, name: "Gym Set" },
    { id: 11, name: "Protein Powder" },
    { id: 12, name: "Creatine Powder" },
    { id: 13, name: "Mass Gainer" },
    { id: 14, name: "Omega 3" },
    { id: 15, name: "Zinc" },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSelect = (id) => {
    setQuery("");
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* LOGO */}
          <Link className="navbar-brand" to="/">
            FitGearz
          </Link>

          {/* TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* SEARCH */}
          <div className="search-container">
            <input
              className="form-control search-input"
              type="search"
              placeholder="Search products on FitGearz..."
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {query && (
              <ul className="search-results">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => (
                    <li
                      key={item.id}
                      className="search-item"
                      onClick={() => handleSelect(item.id)}
                    >
                      <i className="bi bi-search"></i>
                      {item.name}
                    </li>
                  ))
                ) : (
                  <li className="search-no-results">No products found</li>
                )}
              </ul>
            )}
          </div>

          {/* RIGHT NAV */}
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto">
              {/* WISHLIST */}
              <li className="nav-item">
                <Link className="nav-link icon-link" to="/wish">
                  <i className="bi bi-heart"></i>
                  <span>Wishlist</span>
                </Link>
              </li>

              {/* CART */}
              <li className="nav-item">
                <Link className="nav-link icon-link" to="/cart">
                  <i className="bi bi-cart3"></i>
                  <span>Cart</span>
                </Link>
              </li>

              {/* PROFILE DROPDOWN */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link profile-dropdown dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="profile-icon-wrapper">
                    <i className="bi bi-person-circle"></i>
                  </div>

                  <span className="profile-text">Account</span>
                </Link>

                <ul className="dropdown-menu dropdown-menu-end profile-menu">
                  <li className="profile-header">
                    <h6>Hello, User 👋</h6>
                    <p>Welcome to FitGearz</p>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <i className="bi bi-person"></i>
                      My Profile
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/orders">
                      <i className="bi bi-bag"></i>
                      My Orders
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/wishlist">
                      <i className="bi bi-heart"></i>
                      Wishlist
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/contact">
                      <i className="bi bi-headset"></i>
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/login">
                      <i className="bi bi-box-arrow-in-right"></i>
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/signup">
                      <i className="bi bi-person-plus"></i>
                      Sign Up
                    </Link>
                  </li>

                  <li>
                    <button className="dropdown-item logout-btn">
                      <i className="bi bi-box-arrow-right"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
