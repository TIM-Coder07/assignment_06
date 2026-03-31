import React from 'react';

const ProductsCard = ({product}) => {
    return (
    <div className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition bg-white flex flex-col justify-between">
      
      {/* Tag */}
      {product.tag && (
        <span className="self-start px-3 py-1 rounded-full text-sm font-semibold text-white bg-purple-600">
          {product.tagType}
        </span>
      )}

      {/* Icon */}
      <div className="text-5xl my-4">{product.icon}</div>

      {/* Name */}
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">{product.description}</p>

      {/* Features */}
      <ul className="mb-4 space-y-1">
        {product.features.map((feature, idx) => (
          <li key={idx} className="text-gray-700 flex items-center gap-2">
            <span className="text-purple-600">✔</span> {feature}
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mb-4 text-lg font-bold">
        ${product.price} <span className="text-gray-500 text-sm">/{product.period}</span>
      </div>

      {/* Button */}
      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
        Buy Now
      </button>
    </div>
  );
};

export default ProductsCard;