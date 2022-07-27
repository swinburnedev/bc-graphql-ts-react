import * as React from 'react';
import { ProductListQuery } from '../../generated/graphql';
import './styles.scss';

export interface OwnProps {
    handleIdChange: (newId: number) => void;
}
interface Props extends OwnProps {
    data: ProductListQuery;
}

const className = 'ProductList';

const ProductList: React.FC<Props> = ({ data, handleIdChange }) => (
    <div className={className}>
      <h3 className={`${className}__title`}>Products</h3>
      <ol className={`${className}__list`}>
        {!!data.site.products.edges &&
          data.site.products.edges.map(
            (product, i) =>
              !!product && (
                <li
                    key={i}
                    className={`${className}__item`}
                    onClick={() => handleIdChange(product.node.entityId)}
                >
                  {product.node.name}
                </li>
              ),
          )}
      </ol>
    </div>
  );
  
  export default ProductList;
