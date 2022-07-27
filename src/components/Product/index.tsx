import * as React from 'react';
import { useProductByIdQuery } from '../../generated/graphql';
import Product from './Product';

interface OwnProps {
    id: number;
}

const ProductContainer: React.FC<OwnProps> = ({ id }) => {
  const { data, error, loading, refetch } = useProductByIdQuery({ variables: { productId: id } });
  React.useEffect(() => {
    refetch({ productId: id });
  }, [refetch, id]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a product from the panel</div>;
  }

  return <Product data={data} />;
};

export default ProductContainer;