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
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id) => {
    setQuery("");
    navigate(`/product/${id}`); 
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            FitGearz
          </Link>
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

      
          <div className="search-container">
            <input
              className="form-control search-input"
              type="search"
              placeholder="Search FitGearz.in "
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
                      {item.name}
                    </li>
                  ))
                ) : (
                  <li className="search-no-results">No results</li>
                )}
              </ul>
            )}
          </div>

        
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link active" to="/wish">
                  <i className="bi bi-heart fs-5"></i>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="bi bi-cart4 fs-5"> Cart</i>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle m-2 fs-5"></i>
                  Login
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Sign up
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact Us
                    </Link>
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
