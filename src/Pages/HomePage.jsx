import React from 'react';
import { Header } from '../Component/HeaderSection/Header';
import { PatCard } from '../Component/PatCard';
import { HeroFooter } from '../Component/HeroFooter';
import { Product } from '../Component/Product';
import { PetKnowlage } from '../Component/PetKnowlage';
import { Footer } from '../Component/Fotter';

import Herofoter from '../Assets/Footer1.png';

export const HomePage = () => {
  const textStyles = {
    title: "text-darkBlue", 
    subtitle: "text-gray-600",
    bg: "bg-DarkBlue80",
    bgtext: "text-black",
    boder : "border-black"
  };

  return (
    <div>
      <Header />
      <PatCard />
      <HeroFooter image={Herofoter} textStyles={textStyles} /> {/* Pass textStyles here */}
      <Product />
      <PetKnowlage />
    </div>
  );
};
