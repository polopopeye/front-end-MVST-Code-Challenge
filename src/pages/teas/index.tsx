import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import Loading from 'src/components/Layout/Loading';
import ProductCard from 'src/components/Products/ProductCard';
import { listTeas, listTeasApp } from 'src/features/tea/teaSlice';

const TeasPage = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(listTeasApp);

  useEffect(() => {
    dispatch(listTeas());
  }, []);

  return (
    <>
      <div className="mx-6 font-montse ">
        <h1 className=" py-8 text-5xl font-semibold text-bgTitles">
          Just you, hot water and our tea
        </h1>
        <p className="text-lg font-lightText">
          No pesticies or artificial flavours. We promise!
        </p>
        {pending && <Loading />}
        <div className="bg-bgLayout grid md:flex flex-wrap  place-content-center ">
          {data && (
            <>
              {data.map((ele, index) => {
                const { title, image, id } = ele;

                const href = '/teas/' + id;
                return (
                  <div key={index}>
                    <ProductCard href={href} src={image} title={title} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>

      {error && <p>Oops, something went wrong</p>}
    </>
  );
};

export default TeasPage;
