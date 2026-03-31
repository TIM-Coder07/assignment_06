import React from "react";
import bannerImg from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="hero min-h-screen px-6 lg:px-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">

        {/* Left Side Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-200">
            <span className="w-2.5 h-2.5 bg-purple-600 rounded-full"></span>
            <p className="text-sm md:text-base font-medium text-purple-700">
              New: AI-Powered Tools Available
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Supercharge Your <br />
            <span className="text-purple-600">Digital Workflow</span>
          </h1>

          {/* Description */}
          <p className="py-6 text-gray-600 text-base md:text-lg max-w-xl">
            Discover premium digital tools to boost productivity, simplify your
            workflow, and grow faster with modern AI-powered solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn bg-purple-600 text-white hover:bg-purple-700 border-none px-6">
              Explore Tools
            </button>
            <button className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6">
              Watch Demo
            </button>
          </div>
        </div>
        {/* Right Side Image */}
        <div className="flex-1">
          <img
            src={bannerImg}
            alt="Digital Workflow Banner"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
