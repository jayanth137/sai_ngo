'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from './images/logo-sai.png';

const Navbar = () => {
  return (
    <nav className="flex bg-blue justify-between items-center w-screen h-24  border-bottom border-2 border-black bg-purple   ">
      <div>
        <Image src={logo} width={200} height={50} alt="logo" />
      </div>
      <div className="nav-links duration-500 md:static absolute max-md:bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <div className="flex md:flex-row flex-col space-x-8 md:items-center md:gap-[4vw]">
          <nav className="flex sm:justify-center space-x-4">
            {['Home', 'About us', 'Gallery', 'Contact '].map((title) => (
              <p
                key={title}
                className="rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer text-white"
              >
                {title}
              </p>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex gap-x-4">
        <Link
          href="/donation"
          className="btn bg-orange px-6 py-2 mx-4 text-white rounded-xl"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
