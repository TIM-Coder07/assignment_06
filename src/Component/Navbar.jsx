import { ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Resources</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-4">
        
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">DigiTool</a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4">
          <ShoppingCart className="cursor-pointer hover:text-blue-500" />

          <button className="cursor-pointer hover:text-blue-500">
            Log In
          </button>

          <a className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;