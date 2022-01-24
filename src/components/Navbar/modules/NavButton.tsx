import React from 'react';
import Link from 'next/link';

const NavButton = (props) => {
  const { text, href } = props;
  const buttonStyle =
    'text-white text-lg font-montse text-center mx-auto w-full cursor-pointer transition duration-700 ease-in-out border-b-8 hover:border-navSelected border-primary';

  return (
    <Link href={href}>
      <div className={buttonStyle}> {text} </div>
    </Link>
  );
};

export default NavButton;
