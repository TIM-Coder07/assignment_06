import React from "react";
import user from '../assets/user.png';
import pack from '../assets/package.png';
import rocket from '../assets/rocket.png';

const Started3Step = () => {
  return (
    <div className="py-16 px-6 lg:px-16 bg-gray-50">
  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Get Started in <span className="text-purple-600">3 Steps</span>
    </h2>
    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
      Start using premium digital tools in minutes, not hours.
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl p-6 text-center border border-gray-100">
      <p className="text-purple-600 font-bold text-lg mb-3">01</p>

      <img
        src={user}
        alt="Create Account"
        className="w-16 h-16 mx-auto mb-4"
      />

      <h4 className="text-xl font-semibold mb-3">Create Account</h4>

      <p className="text-gray-600 text-sm leading-relaxed">
        Sign up for free in seconds. No credit card required to get started.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl p-6 text-center border border-gray-100">
      <p className="text-purple-600 font-bold text-lg mb-3">02</p>

      <img
        src={pack}
        alt="Choose Tool"
        className="w-16 h-16 mx-auto mb-4"
      />

      <h4 className="text-xl font-semibold mb-3">Choose Your Tool</h4>

      <p className="text-gray-600 text-sm leading-relaxed">
        Browse through premium digital tools and select the perfect one for your workflow.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl p-6 text-center border border-gray-100">
      <p className="text-purple-600 font-bold text-lg mb-3">03</p>

      <img
        src={rocket}
        alt="Start Using"
        className="w-16 h-16 mx-auto mb-4"
      />

      <h4 className="text-xl font-semibold mb-3">Start Using Instantly</h4>

      <p className="text-gray-600 text-sm leading-relaxed">
        Get immediate access and start boosting your productivity right away.
      </p>
    </div>

  </div>
</div>
  );
};

export default Started3Step;
