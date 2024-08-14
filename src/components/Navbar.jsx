import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-xl rounded-lg mx-4 mt-1 mb-1">
      <div className="container mx-auto flex items-center justify-between p-2">
        {/* Navbar Name */}
        <div className="text-2xl font-medium"><span className='text-[#7D6EEB]'>N</span>AV<span className='text-[#7D6EEB]'>B</span>AR</div>
        
        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 p-2 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mid Section: Home, Product, Resource, Pricing */}
        <div className="hidden lg:flex  lg:justify-center lg:space-x-5 flex-1">
          {['Home', 'Product', 'Resource', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-gray-900"
            >
              {
                (item === 'Product' || item === 'Resource') ? (
                    <div className="flex items-center">
                        {item}
                        <IoIosArrowDown className="ml-1" />
                    </div>
                ) : (
                    <>{item}</>
                )}
            </a>
          ))}
        </div>

        {/* Login and Signup Buttons */}
        <div className="hidden lg:flex space-x-4 items-center">
          <a
            href="#login"
            className="text-gray-700 px-3 py-2 border-[1px] rounded-md border-gray-400 hover:text-gray-900"
          >
            Login
          </a>
          <a
            href="#signup"
            className="bg-[#7D6EEB] text-white px-4 py-2 rounded-md hover:bg-[#5a4cb0]"
          >
            Signup
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center  space-y-2 p-4 bg-white border-t border-gray-200">
          {['Home', 'Product', 'Resource', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)} // Close menu on item click
            >
              {item}
            </a>
          ))}
          <a
            href="#login"
            className="text-gray-700 px-3 py-2 border-[1px] rounded-md border-gray-400 hover:text-gray-900"
            onClick={() => setIsOpen(false)} // Close menu on item click
          >
            Login
          </a>
          <a
            href="#signup"
            className="bg-[#7D6EEB] text-white px-4 py-2 rounded-md hover:bg-[#5a4cb0]"
            onClick={() => setIsOpen(false)} // Close menu on item click
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
