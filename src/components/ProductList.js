import React, { useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log('Products :', products);
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
