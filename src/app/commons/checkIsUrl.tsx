import React from 'react';

const isUrl = (string) => {
  const regEx =
    /^(http:\/\/|https:\/\/|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gim;
  const response = regEx.test(string);

  return response;
};

export default isUrl;
