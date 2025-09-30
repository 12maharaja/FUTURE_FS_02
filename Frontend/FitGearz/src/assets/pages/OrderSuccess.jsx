import React from "react";
import { useLocation, Link } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();
  const { order, total } = location.state || {};

  return (
    <div className="success-page">
      <h1>✅ Order Successful!</h1>
      <p>Thank you for your purchase.</p>
      {order && (
        <div className="order-details">
          <p>
            <strong>Order ID:</strong> {order.id}
          </p>
          <p>
            <strong>Name:</strong> {order.name}
          </p>
          <p>
            <strong>Email:</strong> {order.email}
          </p>
          <p>
            <strong>Total Paid:</strong> ₹{total}
          </p>
        </div>
      )}
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default OrderSuccess;
