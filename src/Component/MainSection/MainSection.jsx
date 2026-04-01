import React, { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";
import Navbar from "../Navbar";

const MainSection = ({cartItems, setCartItems}) => {
  const [activeTab, setActiveTab] = useState("products");
  

  // Add to cart handeller

  const handelCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div className="p-6">
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded ${
            activeTab === "products"
              ? "bg-purple-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>

        <button
          className={`px-6 py-2 rounded ${
            activeTab === "cart" ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("cart")}
        >
          Cart
        </button>
      </div>

      {/* Toggling Section */}
      {activeTab === "products" && <Products handelCart={handelCart} />}
      {activeTab === "cart" && <Cart cartItems={cartItems} />}
    </div>
  );
};

export default MainSection;
