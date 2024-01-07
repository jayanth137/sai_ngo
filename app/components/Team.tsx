import Image from 'next/image';
import React from 'react';
import one from './team-images/1s.jpeg';
import two from './team-images/2s.jpeg';
import three from './team-images/3s.jpeg';
import five from './team-images/5.jpeg';

const Team = () => {
  return (
    <main>
      <div className="bg-[#2FA4EA] py-8 w-screen flex justify-start  ">
        <h1 className="text-[#B5E267] text-4xl  font-bold  ml-8">OUR TEAM</h1>
      </div>
      <div className="h-max-content bg-gradient-to-r from-[#ebf7ff] to-[#2FA4EA] py-20">
        <div className="bg-green w-4/5 h-fit mx-auto py-20 rounded-3xl">
          <div className="grid grid-cols-6 gap-20">
            <div className="col-span-3 mx-auto  bg-white rounded-3xl p-12">
              <Image
                src={one}
                alt="one "
                className="w-40 h-40 object-contain"
              />
              <h2></h2>
            </div>
            <div className="col-span-3 mx-auto bg-white rounded-3xl p-12">
              <Image
                src={two}
                alt="one "
                className="w-40 h-40 object-contain"
              />
            </div>
            <div className="col-span-2 mx-auto  bg-white rounded-3xl p-12">
              <Image
                src={three}
                alt="one "
                className="w-40 h-40 object-contain"
              />
            </div>
            <div className="col-span-2 mx-auto  bg-white rounded-3xl p-12">
              <Image
                src={one}
                alt="one "
                className="w-40 h-40 object-contain"
              />
            </div>
            <div className="col-span-2 mx-auto  bg-white rounded-3xl p-12">
              <Image
                src={five}
                alt="one "
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Team;
