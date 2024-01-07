import React from 'react';
import Image from 'next/image';
import hands from './images/hands.svg';

const HeroPage = () => {
  return (
    <main className="bg-blue h-100vh relative flex flex-col ">
      <h1 className="text-6xl font-extrabold text-[#CAE0EA] p-20 py-12 ">
        Support our NGO,
        <br />
        together we change <span className="text-orange">lives.</span>
      </h1>
      <Image src={hands} alt="hero" className="inset-0 relative" />

      <button className="btn text-white px-4 py-2 bg-orange w-28 h-12 mx-0 px-auto  absolute rounded-xl z-50">
        Donate
      </button>
    </main>
  );
};

export default HeroPage;
