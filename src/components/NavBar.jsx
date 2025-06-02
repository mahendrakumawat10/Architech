import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 h-auto transition duration-300 ${isMobileMenuOpen ? 'bg-gray-100' : 'bg-white'} shadow-md`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 h-20">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="MyStudio Logo"
            className="h-32 w-auto object-contain"
          />
          <span className="text-2xl font-bold flex items-center">
            <span className="text-orange-600">M</span>
            <span className="text-black">odern</span>
            <span className="text-orange-600">Ar</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-semibold">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Hamburger/X Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              // X icon
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col space-y-4 font-semibold">
            <Link to="/" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
