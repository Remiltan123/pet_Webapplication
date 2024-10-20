import React, { useEffect, useState } from 'react';
import { Navbar } from '../Component/HeaderSection/Navbar';
import { HeroFooter } from '../Component/HeroFooter';
import Gatogary from '../Assets/Catogary.png';
import { CARD } from '../Component/CARD';
import { useParams } from 'react-router-dom';

export const Category = () => {
  const { Cetogary } = useParams();

  const textStyles = {
    title: "text-white", 
    subtitle: "text-white font-bold",
    bg: "bg-white",
    bgtext: "text-black",
    boder: "border-white"
  };
  
  const [pets, setPets] = useState([]);
  const [categoryPets, setCategoryPets] = useState([]);

  // Function to fetch pets
  const fetchPets = async () => {
    try {
      const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
      if (response.ok) {
        const data = await response.json();
        setPets(data);
      } else {
        alert("An error occurred while fetching data");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while fetching data");
    }
  };

  useEffect(() => {
   
    const getAgeInMonths = (ageString) => {
      const ageParts = ageString.split(" ");
      const number = parseInt(ageParts[0], 10);
      const unit = ageParts[1];

      if (unit === "months" || unit === "month") {
        return number; 
      } else if (unit === "years" || unit === "year") {
        return number * 12; 
      }
      return 0; 
    };

    if (Cetogary === "Small") {
      const smallPets = pets.filter((pet) => getAgeInMonths(pet.age) <= 2);
      setCategoryPets(smallPets);
    } else if (Cetogary === "Big") {
      const bigPets = pets.filter((pet) => getAgeInMonths(pet.age) > 2);
      setCategoryPets(bigPets);
    } else {
      setCategoryPets(pets);
    }
  }, [Cetogary, pets]);

  
  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div>
      <Navbar />
      <HeroFooter image={Gatogary} textStyles={textStyles} />
      <div className= "mb-10" ><CARD pets={categoryPets} /> </div>
    </div>
  );
};
