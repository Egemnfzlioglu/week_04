import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ErrorBoundary } from "./components/error-boundary";
import { Header } from "./components/header";
import { Products } from "./components/products";
import { ShoppingCart } from "./components/shopping-cart";
import { AppProvider } from "./context";
import { ToastProvider } from "./context/toast";
import "./example-app.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import NotFound from "./components/pages/NotFound";
import { AddToCart } from "./components/add-to-cart/add-to-cart";

export default function () {
  return (
    <>
      <BrowserRouter>
        <Header />

        <ErrorBoundary>
          <ShoppingCart />
        </ErrorBoundary>

        <Routes>
          <Route
            path="/"
            element={
              <div className="container example-app">
                <Products />
              </div>
            }
          />

          <Route path="/card" element={<Cart />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
