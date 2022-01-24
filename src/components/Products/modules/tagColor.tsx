import React from 'react';

const tagColor = (catName = 'Arabic') => {
  let tagBgColor = 'bg-tagsArabica';
  switch (catName) {
    case 'Arabic':
      tagBgColor = 'bg-tagsArabica';
      break;
    case 'Robusta':
      tagBgColor = 'bg-tagsRobusta';
      break;
    default:
      tagBgColor = 'bg-tagsArabica';
      break;
  }
  return tagBgColor;
};

export default tagColor;
