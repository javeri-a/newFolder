"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-pink-200 text-black">
      <div className="flex justify-between items-center px-4 py-3 md:py-4">
        
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-pink-800">
            Furniro<span className="text-black font-bold">.</span>
          </h1>
        </div>

        
        <nav className="hidden md:flex text-lg font-medium space-x-6">
          <ul className="flex gap-8">
            <li>
              <Link href="/" className="hover:border-b-2 border-gray-900 transition-all duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:border-b-2 border-gray-900 transition-all duration-300">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:border-b-2 border-gray-900 transition-all duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        
        <div className="flex gap-6 sm:gap-8 items-center">
          <FontAwesomeIcon className="text-gray-950 text-xl cursor-pointer hover:text-pink-800 transition-colors duration-300" icon={faSearch} />
          <FontAwesomeIcon className="text-gray-950 text-xl cursor-pointer hover:text-pink-800 transition-colors duration-300" icon={faHeart} />
          <FontAwesomeIcon className="text-gray-950 text-xl cursor-pointer hover:text-pink-800 transition-colors duration-300" icon={faShoppingCart} />
          <FontAwesomeIcon className="text-gray-950 text-xl cursor-pointer hover:text-pink-800 transition-colors duration-300" icon={faUser} />
        </div>

        
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-950 text-2xl focus:outline-none">
            {menuOpen ? (
              <FontAwesomeIcon icon={faTimes} /> 
            ) : (
              <FontAwesomeIcon icon={faBars} />  
            )}
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <nav className="md:hidden bg-pink-200">
          <ul className="flex flex-col space-y-4 px-4 py-4">
            <li>
              <Link href="/" className="text-lg hover:text-pink-800 transition-all duration-300" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-lg hover:text-pink-800 transition-all duration-300" onClick={toggleMenu}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg hover:text-pink-800 transition-all duration-300" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
