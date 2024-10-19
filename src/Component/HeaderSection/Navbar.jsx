import React, { useState } from 'react';
import Frame from '../../Assets/Frame.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CategorySelection = ({ onSelectCategory }) => {
  return (
    <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg z-50">
      
      <Link to={`/PetCetogary/Small`}><a href="#"className="block px-4 py-2 text-gray-800 hover:bg-lightBlue hover:text-white cursor-pointer"
        onClick={() => onSelectCategory()} >
        Small Dog
      </a></Link>
      <Link to={`/PetCetogary/Big`}><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-lightBlue hover:text-white cursor-pointer"
        onClick={() => onSelectCategory()} >
        Big Dog
      </a></Link>
    </div>
  );
};

export const Navbar = () => {

  const navigate = useNavigate()
  const [showCategorySelection, setShowCategorySelection] = useState(false);

  const handleCategoryClick = () => {
    setShowCategorySelection((prev) => !prev);
  };

  const handleSelectCategory = () => {
    setShowCategorySelection(false); 
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-light relative z-50">
      <div className="flex items-center">
        <img src={Frame} alt="Logo" className="h-12 ps-12" />
      </div>

      <ul className="flex space-x-6 text-darkBlue font-medium relative">
        <Link to="/"><li><a href="#" className="hover:text-lightBlue cursor-pointer">Home</a></li></Link>

        <li className="relative">
          <button
            onClick={handleCategoryClick}
            className="hover:text-lightBlue cursor-pointer focus:outline-none"
          >
            Category
          </button>

          {showCategorySelection && (
            <CategorySelection onSelectCategory={handleSelectCategory} />
          )}
        </li>

        <li><a href="#" className="hover:text-lightBlue cursor-pointer">About</a></li>
        <li><a href="#" className="hover:text-lightBlue cursor-pointer">Contact</a></li>
      </ul>

      <div className="flex items-center space-x-4">
        <button className="bg-lightBlue text-white px-4 py-2 rounded-full hover:bg-buttonHover cursor-pointer">
          Join the community
        </button>
      </div>
    </nav>
  );
};
