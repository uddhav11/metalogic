import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">Metalogic</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition">Services</a>
            <a href="#approach" className="text-gray-700 hover:text-indigo-600 transition">Approach</a>
            <a href="#tech" className="text-gray-700 hover:text-indigo-600 transition">Tech Stack</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
              Contact Us
            </button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-3">
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition">Services</a>
            <a href="#approach" className="text-gray-700 hover:text-indigo-600 transition">Approach</a>
            <a href="#tech" className="text-gray-700 hover:text-indigo-600 transition">Tech Stack</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};