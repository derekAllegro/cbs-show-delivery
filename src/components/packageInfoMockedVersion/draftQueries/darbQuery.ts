import { gql } from "graphql-tag";

export const darbQuery = gql`
  query BuyerOrders($userId: UserId!, $offset: Int!, $limit: Int!, $filters: BoughtOrderGroupedOrderFilters) {
    user(userId: $userId) {
      ... on User {
        orders {
          boughtOrderGroupedByDelivery(offset: $offset, limit: $limit, filters: $filters) {
            data {
              delivery {
                isSmart
              }
              parcelTracking {
                deliveryTime {
                  estimatedDeliveryDates {
                    to
                  }
                  declaredDispatchDate
                }
              }
            }
          }
        }
      }
    }
  }
`;
