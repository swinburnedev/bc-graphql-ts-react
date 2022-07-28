import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
query productById(
   $productId: Int!
 ) {
   site {
     product(entityId: $productId) {
       id
       entityId
       name
       plainTextDescription
       defaultImage {
         ...ImageFields
       }
       images {
         edges {
           node {
             ...ImageFields
           }
         }
       }
       reviewSummary {
         summationOfRatings
         numberOfReviews
       }
       prices {
         price {
           ...MoneyFields
         }
         priceRange {
           min {
             ...MoneyFields
           }
           max {
             ...MoneyFields
           }
         }
         salePrice {
           ...MoneyFields
         }
         retailPrice {
           ...MoneyFields
         }
         saved {
           ...MoneyFields
         }
         bulkPricing {
           minimumQuantity
           maximumQuantity
           ... on BulkPricingFixedPriceDiscount {
             price
           }
           ... on BulkPricingPercentageDiscount {
             percentOff
           }
           ... on BulkPricingRelativePriceDiscount {
             priceAdjustment
           }
         }
       }
       brand {
         name
       }
     },
     settings {
      url {
        vanityUrl
      }
     }
   }
 }
 
 fragment ImageFields on Image {
   url320wide: url(width: 320)
   url640wide: url(width: 640)
   url960wide: url(width: 960)
   url1280wide: url(width: 1280)
   altText
 }
 
 fragment MoneyFields on Money {
   value
   currencyCode
 }
`;
 