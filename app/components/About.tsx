import React from 'react';
import Image from 'next/image';
import Delight from './images/Delight.jpg';
import vision from './images/vision.png';

const About = () => {
  return (
    <main>
      <div className="bg-[#2FA4EA] py-8 w-screen flex justify-start   ">
        <h1 className="text-[#B5E267] text-4xl font-bold  ml-8">ABOUT US</h1>
      </div>
      <div className="h-max-content bg-gradient-to-r from-[#ebf7ff] to-[#2FA4EA]">
        <div className="w-9/10 md:p-20  flex md:flex-row flex-col  ">
          <div className="bg-white w-1/2 h-auto p-20 grow">
            <Image src={Delight} alt="hero" className="inset-x-0" />
          </div>
          <div className="bg-green w-1/2 h-auto p-20 grow">
            <h2 className="text-4xl font-bold text-white text-center py-2">
              OUR MISSION
            </h2>
            <p className="text-white text-xl">
              At the Vishwa Vyakriti Foundation, our mission is to create a
              better society by addressing the fundamental needs of the
              underprivileged and fostering a passion for science and technology
              among young minds. We are dedicated to providing food and clothing
              to those in need, focusing particularly on creating opportunities
              for children and families living in both rural and urban poverty.
              We strive to bring about positive and sustainable change in the
              lives of those we serve.
            </p>
          </div>
        </div>

        <div className="w-9/10 md:p-20  flex md:flex-row flex-col  ">
          <div className="bg-green w-1/2 h-auto p-20 grow">
            <h2 className="text-4xl font-bold text-white text-center py-2">
              OUR VISION{' '}
            </h2>
            <p className="text-white text-xl">
              Our vision is to build a world where every individual, regardless
              of their socioeconomic background, has equal access to
              opportunities and resources. We envision a society where children
              and families living in rural and urban poverty are empowered to
              break free from the cycle of poverty and thrive. We aim to provide
              them with the necessary support, education, and tools to create a
              brighter future for themselves and their communities. We ensure
              that our efforts lead to tangible and meaningful outcomes,
              enabling us to continuously improve and maximize our positive
              influence
            </p>
          </div>
          <div className="bg-white w-1/2 h-auto p-20 grow">
            <Image src={vision} alt="hero" className="inset-x-0" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
