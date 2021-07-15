import React, { memo } from 'react';
import ImgMediaCard from './ProductCard';

const Products = ({ product }) => {
  return (
    <div>
      <ImgMediaCard product={product} />
    </div>
  );
};

export default memo(Products);
