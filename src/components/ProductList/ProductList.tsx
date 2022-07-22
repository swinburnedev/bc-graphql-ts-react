import * as React from 'react';
import { ProductListQuery } from '../../generated/graphql';
import './styles.scss';

interface Props {
    data: ProductListQuery;
}

const className = 'ProductList';

const ProductList: React.FC<Props> = ({ data }) => (
    <div className={className}>
      <h3>Products</h3>
      <ol className={`${className}__list`}>
        {!!data.site.products.edges &&
          data.site.products.edges.map(
            (product, i) =>
              !!product && (
                <li key={i} className={`${className}__item`}>
                  {product.node.id} ({product.node.name})
                </li>
              ),
          )}
      </ol>
    </div>
  );
  
  export default ProductList;
