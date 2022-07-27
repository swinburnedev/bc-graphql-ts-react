import * as React from 'react';
import { ProductByIdQuery } from '../../generated/graphql';
import './styles.scss';

interface Props {
  data: ProductByIdQuery;
}

const className = 'Product';

const Product: React.FC<Props> = ({ data }) => {
    const {site: { product }} = data || {};
  if (!product) {
    return <div>No product available</div>;
  }

  return (
    <div className={className}>
        <h1 className={`${className}__title`}>
            {product.name}
        </h1>
        <p className={`${className}__description`}>{product.plainTextDescription}</p>
        <p>{product.prices?.price.value}</p>
        {!!product.images && !!product.images.edges && (
            <div className={`${className}__image-list`}>
            {product.images.edges.map((image, i) =>
                image ? (
                <img
                    src={image.node.url1280wide}
                    className={`${className}__image`}
                    key={image.node.url1280wide}
                    alt="TODO"
                />
                ) : null,
            )}
            </div>
        )}
        </div>
  );
};

export default Product;