import React from 'react';
import Image from 'next/image';

import isUrl from 'src/app/commons/checkIsUrl';
import tagColor from './modules/tagColor';

const ProductLayout = (props) => {
  const { title, category, image, description } = props.product;

  const isRemoteImg = isUrl(image);
  const catName = category ? category.name : undefined;
  const tagBgColor = tagColor(catName);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-content-center">
      <div className="grid place-content-center">
        <h1 className="text-center text-3xl py-8">{title}</h1>
        <div className="border-borderProduct border-2 rounded-lg shadow-md">
          {isRemoteImg ? (
            <img src={image} width="300" height="300" />
          ) : (
            <>
              <Image src={image} width="300" height="300" />
            </>
          )}
        </div>
      </div>
      <div className="p-8 mt-16 text-lg">
        <p>{description}</p>
        <br />
        <p className="text-center ">
          {category && (
            <b className={` text-white p-4 ${tagBgColor} rounded-md`}>
              {catName}
            </b>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductLayout;
