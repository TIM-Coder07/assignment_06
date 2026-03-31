import React from "react";

const Count = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-purple-500/10 backdrop-blur-sm shadow-md">
        
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600">50K+</h2>
          <p className="text-sm md:text-base text-gray-600">Active Users</p>
        </div>

        <div className="hidden sm:block w-px h-12 bg-gray-300"></div>

        <div className="text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600">200+</h2>
          <p className="text-sm md:text-base text-gray-600">Premium Tools</p>
        </div>

        <div className="hidden sm:block w-px h-12 bg-gray-300"></div>

        <div className="text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600">4.9</h2>
          <p className="text-sm md:text-base text-gray-600">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Count;