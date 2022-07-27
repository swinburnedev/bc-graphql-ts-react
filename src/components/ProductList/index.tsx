import * as React from 'react';
import { useProductListQuery } from '../../generated/graphql';
import ProductList, { OwnProps } from './ProductList';

const ProductListContainer: React.FC<OwnProps> = (props) => {
    const { data, error, loading } = useProductListQuery();
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error || !data) {
      return <div>ERROR</div>;
    }
  
    return <ProductList data={data} {...props} />;
  };

export default ProductListContainer;