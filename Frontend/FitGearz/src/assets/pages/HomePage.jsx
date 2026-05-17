import React, { useState } from "react";
import Navbar from "./homepage/Navbar";
import ProductList from "./ProductList";
import HeroBanner from "./homepage/HeroBanner";
import Footer from "./homepage/Footer";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import OrderSuccess from "./OrderSuccess";
import OrdersPage from "./OrdersPage";
import ProfilePage from "./ProfilePage";

import { Routes, Route } from "react-router-dom";

function HomePage() {
  const [cart, setCart] = useState([]);

  /* =========================
     ADD TO CART
  ========================= */

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);

      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  /* =========================
     REMOVE ITEM
  ========================= */

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  /* =========================
     UPDATE QUANTITY
  ========================= */

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity } : item)),
      );
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar cartCount={cart.length} />

      <Routes>
        {/* =========================
            HOME PAGE
        ========================= */}

        <Route
          path="/"
          element={
            <>
              <HeroBanner />

              {/* PRODUCTS TITLE */}
              <div className="products-title-wrapper">
                <h3 className="cate">Our Products</h3>
              </div>

              {/* PRODUCT LIST */}
              <ProductList addToCart={addToCart} />

              <Footer />
            </>
          }
        />

        {/* =========================
            CART PAGE
        ========================= */}

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

        {/* =========================
            CHECKOUT PAGE
        ========================= */}

        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} setCart={setCart} />}
        />

        {/* =========================
            SUCCESS PAGE
        ========================= */}

        <Route path="/success" element={<OrderSuccess />} />

        {/* =========================
            PROFILE PAGE
        ========================= */}

        <Route path="/profile" element={<ProfilePage />} />

        {/* =========================
            ORDERS PAGE
        ========================= */}

        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </>
  );
}

export default HomePage;
