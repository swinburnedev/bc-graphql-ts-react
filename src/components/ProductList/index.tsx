import * as React from 'react';
import { useProductListQuery } from '../../generated/graphql';
import ProductList from './ProductList';

const ProductListContainer = () => {
    const { data, error, loading } = useProductListQuery();
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error || !data) {
      return <div>ERROR</div>;
    }
  
    return <ProductList data={data} />;
  };

export default ProductListContainer;