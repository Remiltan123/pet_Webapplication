import React from 'react';
import play from "../../Assets/Play_Circle.png";

export const Hero = ({ textStyles = {} }) => {
  console.log(textStyles.title)
  return (
    <section className="relative px-6 py-16 ms-10 h-full">
      <div className="max-w-lg">
        <h1 className={`text-5xl font-bold leading-tight ${textStyles.title}`}>
          One More Friend <br />
        </h1>
        <span className={`text-3xl font-bold leading-tight ${textStyles.title}`}>
          Thousands More Fun!
        </span>
        <p className={`mt-4 ${textStyles.subtitle}`}>
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
          We have 200+ different pets that can meet your needs!
        </p>
        <div className="mt-6 flex space-x-4 d-flex">
          <div className={`flex items-center border ${textStyles.boder} rounded-full`}>
            <button className={`flex items-center ${textStyles.title} px-6 py-3`}>
              View Intro
            </button>
            <img src={play} alt="Play Icon" className="w-8 h-8 me-3" />
          </div>
          <button className={`border ${textStyles.bgtext} px-6 py-3 rounded-full ${textStyles.bg}`}>
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};
