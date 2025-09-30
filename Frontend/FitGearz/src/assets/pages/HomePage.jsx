import React, { useState } from "react";
import Navbar from "./homepage/Navbar";
import ProductList from "./ProductList";
import HeroBanner from "./homepage/HeroBanner";
import Footer from "./homepage/Footer";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import OrderSuccess from "./OrderSuccess";
import OrdersPage from "./OrdersPage"; // 🆕 Admin orders page
import { Routes, Route } from "react-router-dom";

function HomePage() {
  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <h3 className="cate">Products</h3>
              <ProductList addToCart={addToCart} />
              <Footer />
            </>
          }
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />

        {/* Checkout Page */}
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} setCart={setCart} />}
        />

        {/* Order Success Page */}
        <Route path="/success" element={<OrderSuccess />} />

        {/* 🆕 Admin Orders Management Page */}
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </>
  );
}

export default HomePage;
