import React from 'react';

const TwoCard = () => {
  return (
    <main className="bg-green h-max-content px-40 py-20 flex  ">
      <div className="w-1/2">
        <h3 className="text-white text-3xl font-bold  my-4">
          Become a Volunteer:{' '}
        </h3>
        <button className="btn bg-blue py-2 px-2 rounded-xl text-white">
          Volunteer Now
        </button>
      </div>
      <hr className="h-40 border border-solid  border-r-black mx-20" />
      <div className="w-1/2">
        <h3 className="text-white text-3xl font-bold my-4">
          Become a Sponsor:{' '}
        </h3>
        <button className="btn bg-blue py-2 px-2 rounded-xl text-white">
          Donate Now
        </button>
      </div>
    </main>
  );
};

export default TwoCard;
