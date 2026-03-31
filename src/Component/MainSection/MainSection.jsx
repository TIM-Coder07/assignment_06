import React, { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

const MainSection = () => {
  const [activeTab, setActiveTab] = useState("products"); // default

  return (
    <div className="p-6">
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded ${
            activeTab === "products" ? "bg-purple-600 text-white" : "bg-gray-200"
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
      {activeTab === "products" && <Products />}
      {activeTab === "cart" && <Cart />}
    </div>
  );
};

export default MainSection;