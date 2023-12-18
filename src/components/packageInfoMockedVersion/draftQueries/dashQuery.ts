import { gql } from "graphql-tag";

export const darsQuery = gql`
  query SellerOrders($userId: UserId!, $sellerId: ID!, $offset: Int!, $limit: Int!, $filters: SellerOrdersFilters) {
    user(userId: $userId) {
      ... on User {
        orders {
          sold(offset: $offset, limit: $limit, filters: $filters) {
            data {
              delivery {
                costTransfers(sellerId: $sellerId) {
                  tags
                }
              }
              score {
                waybillInTime
                dispatchInTime
              }
            }
          }
        }
      }
    }
  }
`;

// required variables:
// {
//     "userId": "93980726",
//     "sellerId": "93980726",
//     "offset": 0,
//     "limit": 10,
//     "filters": null
// }
