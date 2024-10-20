import React, { useState } from 'react';
import header_img from '../../Assets/header.png'; // Background image
import { Navbar } from './Navbar';
import { Hero } from './Hero';

export const Header = () => {
  

  const textStyles = {
    title: "text-darkBlue", 
    subtitle: "text-red",
     bg: "bg-DarkBlue80",
      bgtext: "text-white",
      boder : "border-black"
  };

  return (
    <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${header_img})` }}>
      <Navbar  /> 
      <Hero textStyles={textStyles}/>
    </header>
  );
};
