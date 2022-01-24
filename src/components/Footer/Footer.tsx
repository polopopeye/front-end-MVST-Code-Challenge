import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div className="flex  mx-auto w-full place-content-center mt-16 pb-16">
        <div className="text-footerBrand  px-1 mx-1 text-xs">Made With</div>
        <Image src="/static/img/love.png" width="36" height="17" />
      </div>
    </div>
  );
};

export default Footer;
