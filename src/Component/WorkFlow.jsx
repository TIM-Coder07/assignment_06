import React from "react";

const WorkFlow = () => {
  return (
    <div className="bg-purple-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Ready to Transform Your Workflow?
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition w-full sm:w-auto">
            Explore Products
          </button>
          <button className="px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        {/* Small note */}
        <p className="text-gray-500 text-sm mt-4">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default WorkFlow;
