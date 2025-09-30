import React from "react";
import { Link } from "react-router-dom";

function ProductCards({ id, name, description, image }) {
  return (
    <Link
      to={`/product/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card">
        <img src={image} alt={name} />
        <h4 id="name">{name}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default ProductCards;
