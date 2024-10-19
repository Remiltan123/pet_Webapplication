import React, { useState } from 'react';
import header_img from '../../Assets/header.png'; // Background image
import { Navbar } from './Navbar';
import { Hero } from './Hero';

export const Header = () => {
  const [category, SetCategory] = useState(""); // Shared category state

  // Log the selected category (optional, just for testing)
  console.log("Selected Category in Header:", category);

  return (
    <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${header_img})` }}>
      <Navbar  /> 
      <Hero />
    </header>
  );
};
