import React, { useState } from 'react';
import { Navbar } from '../Component/HeaderSection/Navbar';

export const Category = () => {
  const [category, SetCategory] = useState(""); // Shared category state

  // Log the selected category (optional, just for testing)
  console.log("Selected Category in Category Page:", category);

  return (
    <div>
      <Navbar/>
      
    </div>
  );
};
