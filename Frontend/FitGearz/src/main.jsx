import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/css/ProductCards.css";
import "./assets/css/LoginPage.css";
import "./assets/css/CartPage.css";
import "./assets/css/Navbar.css";
import "./assets/css/HeroPanner.css";
import "./assets/css/Footer.css";
import "./assets/css/DetailPage.css";
import "./assets/css/CheckoutPage.css";
import "./assets/css/OrderSuccess.css";
import "./assets/css/OrderPage.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./assets/pages/HomePage.jsx";
import ProductDetailsPage from "./assets/pages/ProductDetailsPage.jsx";
import CartPage from "./assets/pages/CartPage.jsx";
import LoginPage from "./assets/pages/LoginPage.jsx";
import SignupPage from "./assets/pages/SignupPage.jsx";
import CheckoutPage from "./assets/pages/CheckoutPage.jsx";

// App wrapper with Cart state
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
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
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const router = createBrowserRouter(
    [
      {
        path: "/*",
        element: <HomePage addToCart={addToCart} cartCount={cart.length} />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage addToCart={addToCart} />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage cart={cart} />,
      },
      {
        path: "/cart",
        element: (
          <CartPage
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ),
      },
      {
        path: "*", // catch-all (if URL not found → HomePage)
        element: <HomePage addToCart={addToCart} cartCount={cart.length} />,
      },
    ],
    {
      basename: "/FitGearz", // important for GitHub Pages
    }
  );

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
