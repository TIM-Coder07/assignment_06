import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cartItems, handleRemove, setCartItems }) => {

  // Clear all items
  const handlePurchase = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is already empty!");
      return;
    }
    setCartItems([]);
    toast.success("Purchase successful!");
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="space-y-4">

      {cartItems.length === 0 && (
        <p className="text-gray-500 text-center py-10 text-lg">
          Your cart is empty.
        </p>
      )}

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 flex justify-between items-center shadow"
        >
          <div className="flex items-center gap-4">
            <div className="text-3xl">{item.icon}</div>
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-600">
                ${item.price}/{item.period}
              </p>
            </div>
          </div>

          <button
            onClick={() => handleRemove(item.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total Price */}
      {cartItems.length > 0 && (
        <div className="text-right font-bold text-lg">
          Total: ${totalPrice}
        </div>
      )}

      {/* Purchase Button */}
      <button
        onClick={handlePurchase}
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 py-3 mt-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition mx-auto block"

      >
        Purchase
      </button>
    </div>
  );
};

export default Cart;