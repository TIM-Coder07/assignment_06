import React from "react";

const Cart = ({ cartItems }) => {
  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="space-y-4">
      {cartItems.map((item, idx) => (
        <div
          key={idx}
          className="border rounded-lg p-4 flex justify-between items-center shadow"
        >
          <div className="flex items-center gap-4">
            <div className="text-3xl">{item.icon}</div>
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-600">${item.price}/{item.period}</p>
            </div>
          </div>
          <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;