import React from 'react';

const Loading = () => {
  return (
    <>
      <div className=" opacity-75 grid grid-cols-1  text-lg absolute w-full mt-16 place-content-center z-50 transition duration-100 ease-in-out ">
        <div className="bg-white border-primary place-content-center text-center">
          <svg
            className="animate-spin h-16 w-16 mr-3 "
            viewBox="0 0 24 24"
          ></svg>
          <p>Loading</p>
        </div>
      </div>
    </>
  );
};

export default Loading;
