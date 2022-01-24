import React from 'react';

import constants from 'src/core/constants';
import axios from 'axios';

import ProductLayout from 'src/components/Products/ProductLayout';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const CoffeProductInfo = ({ data: coffee }) => {
  return (
    <div>
      <ProductLayout product={coffee} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const res = await axios.get(constants.baseApiUrl + '/coffees/' + id);
  const { data } = res;

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(constants.baseApiUrl + '/coffees/');
  const { data } = res,
    paths = [];

  data.map((ele) => {
    return paths.push({
      params: {
        id: ele.id.toString(),
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export default CoffeProductInfo;
