import React, { useEffect, useState } from 'react';
import { CARD } from './CARD';

export const PatCard = () => {
    const [pets, setPets] = useState([]);

    // API function for fetching the data
    const FeachPets = async () => {
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

    console.log(pets)

    useEffect(() => {
        FeachPets();
    }, []);

    return (
        <CARD pets={pets}/> 
    );
};
