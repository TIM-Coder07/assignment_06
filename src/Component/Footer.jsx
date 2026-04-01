import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About DigiTools</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We provide premium digital tools to supercharge your workflow. Join
            thousands of happy users worldwide.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              Products
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Pricing
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Testimonials
            </li>
            <li className="hover:text-white cursor-pointer transition">FAQ</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm mb-2">
            Email: support@digitaltools.com
          </p>
          <p className="text-gray-400 text-sm mb-2">Phone: +123 456 7890</p>
          <p className="text-gray-400 text-sm mb-4">
            Address: 123 Digital St, Tech City
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white hover:scale-110 transition duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:scale-110 transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Digital Tools. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
