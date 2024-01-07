import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Delight from './images/Delight.jpg';
import event2 from './images/event2.jpg';
import event3 from './images/event3.jpg';

const Events = () => {
  return (
    <main className="bg-[#9DD1F5] h-screen ">
      <h1 className="text-center text-8xl  py-4 text-black -extrabold">
        Events
        <hr className="w-40 mx-auto  border-2 border-black" />
      </h1>

      <div className="bg-[#49BBFF] w-4/5 h-fit mx-auto py-20 rounded-3xl">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image
                src={event3}
                alt="hero"
                className=" object-contain mx-auto h-96 w-96"
              />
              <h2 className="text-4xl font-bold text-black text-center my-4">
                Upcoming Event
              </h2>
            </CarouselItem>
            <CarouselItem>
              <Image
                src={event2}
                alt="hero"
                className=" object-contain  mx-auto h-96 w-96"
              />
              <h2 className="text-4xl font-bold text-black text-center my-4">
                AspireX - A Vision for the Future Minds{' '}
              </h2>
            </CarouselItem>
            <CarouselItem>
              <Image
                src={Delight}
                alt="hero"
                className=" object-contain mx-auto h-96 w-96"
              />
              <h2 className="text-4xl font-bold text-black text-center my-4">
                Delight - A Gift of giving
              </h2>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
};

export default Events;
