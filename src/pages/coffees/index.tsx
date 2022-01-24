import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import Loading from 'src/components/Layout/Loading';
import ProductCard from 'src/components/Products/ProductCard';
import { listCoffees, listCoffeesApp } from 'src/features/coffee/coffeeSlice';

const CoffeesPage = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(listCoffeesApp);

  useEffect(() => {
    dispatch(listCoffees());
  }, []);

  return (
    <>
      <div className="mx-6 font-montse ">
        <h1 className=" py-8 text-5xl font-semibold text-bgTitles">
          Our beloved coffee
        </h1>
        <p className="text-lg font-lightText">
          Hand-picked, made with love, curated, call it what you want. But we
          promise you, this will be the best coffe of your life.
        </p>
        {pending && <Loading />}
        <div className="bg-bgLayout grid md:flex flex-wrap  place-content-center ">
          {data && (
            <>
              {data.map((ele, index) => {
                const { title, image, id, category } = ele;

                const href = '/coffees/' + id;
                return (
                  <div key={index}>
                    <ProductCard
                      href={href}
                      src={image}
                      title={title}
                      category={category}
                    />
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

export default CoffeesPage;
