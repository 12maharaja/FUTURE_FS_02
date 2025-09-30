import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CartPage({ cart = [], removeFromCart, updateQuantity }) {
  const navigate = useNavigate(); // ✅ useNavigate hook initialize

  // 🧮 total amount calculation
  const total = cart.length
    ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Cart Items</h2>

        {cart.length === 0 ? (
          <p>
            Your cart is empty.{" "}
            <Link to="/" className="text-decoration-none">
              Go shopping
            </Link>
          </p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />

              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p className="cart-price">₹{item.price}</p>

                {/* Quantity control */}
                <div className="quantity-control">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                {/* Remove button */}
                <button
                  className="remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Subtotal ({cart.length} items):</h3>
          <h2>₹{total}</h2>
          <button onClick={() => navigate("/checkout")} className="btn">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
