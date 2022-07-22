import { gql } from '@apollo/client';

export const QUERY_PRODUCT_LIST = gql`
    query productList {
        site {
            products {
                edges {
                    node {
                        entityId,
                        id,
                        name
                    }
                }
            }
        }
    }
`;
