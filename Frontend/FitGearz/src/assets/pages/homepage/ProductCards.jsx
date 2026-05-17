import React from "react";
import { Link } from "react-router-dom";

function ProductCards({ id, name, description, image }) {
  return (
    <Link to={`/product/${id}`} className="product-link">
      <div className="card">
        <div className="card-img-wrapper">
          <img src={image} alt={name} />
        </div>

        <div className="card-content">
          <h4 id="name">{name}</h4>

          <p>{description}</p>

          <button className="view-btn">View Product</button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCards;
