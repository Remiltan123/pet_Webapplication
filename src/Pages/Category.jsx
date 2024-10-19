import React, { useState } from 'react';
import { Navbar } from '../Component/HeaderSection/Navbar';
import { HeroFooter } from '../Component/HeroFooter';
import Gatogary from '../Assets/Catogary.png'

export const Category = () => {
 
  return (
    <div>
      <Navbar/>
      <HeroFooter image ={Gatogary}/>
      
    </div>
  );
};
