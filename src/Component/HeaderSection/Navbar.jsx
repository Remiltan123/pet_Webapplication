import React from 'react';
import Frame from '../../Assets/Frame.png';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-light">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src={Frame} alt="Logo" className="h-12 ps-12" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-darkBlue font-medium">
        <li><a href="#" className="hover:text-lightBlue">Home</a></li>
        <li><a href="#" className="hover:text-lightBlue">Category</a></li>
        <li><a href="#" className="hover:text-lightBlue">About</a></li>
        <li><a href="#" className="hover:text-lightBlue">Contact</a></li>
      </ul>

      {/* Search Bar and Buttons */}
      <div className="flex items-center space-x-4">
        <button className="bg-lightBlue text-white px-4 py-2 rounded-full hover:bg-buttonHover">
          Join the community
        </button>
      </div>
    </nav>
  );
};
