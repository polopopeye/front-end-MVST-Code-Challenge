import React from 'react';
import Logo from './modules/Logo';

import NavButton from './modules/NavButton';

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-500 mx-auto bg-primary shadow-md overflow-hidden">
        <Logo />
        <div className="grid grid-cols-2 content-center ">
          <NavButton text="Our Coffe" href="/coffees" />
          <NavButton text="Our Tea" href="/teas" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
