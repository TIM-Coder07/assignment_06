import React from "react";

const TransparentPricing = () => {
  return (
    <div className="py-20 px-6 lg:px-16 bg-gradient-to-r from-purple-100 via-white to-pink-100">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Transparent <span className="text-purple-600">Pricing</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Choose the perfect plan for your needs and start using premium digital
          tools today.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Starter */}
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-8 text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Starter</h3>
          <p className="text-gray-600 mb-6">
            Perfect for beginners and personal use.
          </p>

          <div className="mb-6">
            <span className="text-4xl font-bold text-purple-700">$9</span>
            <span className="text-gray-600 text-lg"> /month</span>
          </div>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>✔ Access to 10 tools</li>
            <li>✔ Basic support</li>
            <li>✔ Limited downloads</li>
          </ul>

          <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>

        {/* Pro */}
        <div className="bg-white/30 backdrop-blur-lg border-2 border-purple-500 shadow-2xl rounded-2xl p-8 text-center hover:scale-105 transition duration-300 relative">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">Pro</h3>
          <p className="text-gray-600 mb-6">
            Best for professionals and freelancers.
          </p>

          <div className="mb-6">
            <span className="text-4xl font-bold text-purple-700">$19</span>
            <span className="text-gray-600 text-lg"> /month</span>
          </div>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>✔ Access to 50+ tools</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited downloads</li>
          </ul>

          <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
            Buy Pro
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-8 text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise</h3>
          <p className="text-gray-600 mb-6">
            Advanced solution for teams and businesses.
          </p>

          <div className="mb-6">
            <span className="text-4xl font-bold text-purple-700">$49</span>
            <span className="text-gray-600 text-lg"> /month</span>
          </div>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>✔ Access to all tools</li>
            <li>✔ Dedicated support</li>
            <li>✔ Team collaboration features</li>
          </ul>

          <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransparentPricing;
