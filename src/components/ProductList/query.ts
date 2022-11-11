import { gql } from '@apollo/client';

export const QUERY_PRODUCT_LIST = gql`
    query productList (
        $first: Int!
    ) {
        site {
            products(first: $first) {
                edges {
                    node {
                        entityId,
                        name,
                        prices {
                            price {
                                ...MoneyFields
                            }
                        }
                    }
                }
            }
        }
    }
    fragment MoneyFields on Money {
        value
        currencyCode
    }
`;
