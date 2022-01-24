import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import isUrl from 'src/app/commons/checkIsUrl';
import tagColor from './modules/tagColor';

const ProductCard = (props) => {
  const { href, src, title, category, i } = props;
  const random = Math.floor(Math.random() * 1000000 + 1);
  let catName = '';
  if (category) {
    catName = category.name;
  }
  const tagBgColor = tagColor(catName);
  const isRemoteImg = isUrl(src);

  return (
    <div
      key={random}
      className="pt-4 bg-white border-2 border-bgProduct border-borderProduct drop-shadow-sm mt-4 mb-4 px-2 w-full md:max-w-xs md:grid rounded-lg md:m-4"
    >
      {isRemoteImg ? (
        <Link href={href}>
          <img src={src} width="300" height="248" />
        </Link>
      ) : (
        <Link href={href}>
          <Image
            className="cursor-pointer"
            src={src}
            width="300"
            height="248"
          />
        </Link>
      )}

      <Image src="/static/app/product/vector1.svg" width="295" height="2" />
      <div className=" grid grid-col-2  grid-flow-col  ">
        <div className=" w-52 text-lg font-semibold text-bgTitles">
          <Link href={href}>{title}</Link>
        </div>

        <div className="w-20 place-content-center mt-1">
          <div
            className={`mb-8 text-white ${tagBgColor} rounded-sm text-center`}
          >
            {catName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
