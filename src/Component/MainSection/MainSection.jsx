import React, { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";
import { toast } from "react-toastify";

const MainSection = ({ cartItems, setCartItems }) => {
  const [activeTab, setActiveTab] = useState("products");

  // Add to cart handeller

  const handelCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemove = (id) => {
    const remainingCart = cartItems.filter((item) => item.id !== id);
    setCartItems(remainingCart);
    toast.info("Item removed from cart!");
  };

  return (
    <div className="p-6">
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6 justify-center">
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
          className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition ${
            activeTab === "cart"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("cart")}
        >
          Cart
          <span
            className={`px-2 py-0.5 text-sm rounded-full ${
              activeTab === "cart"
                ? "bg-white text-purple-600"
                : "bg-purple-600 text-white"
            }`}
          >
            {cartItems.length}
          </span>
        </button>
      </div>

      {/* Toggling Section */}
      {activeTab === "products" && <Products handelCart={handelCart} />}
      {activeTab === "cart" && (
        <Cart
          handleRemove={handleRemove}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      )}
    </div>
  );
};

export default MainSection;
