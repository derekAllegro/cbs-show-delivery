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

export const SHIPMENT_DETAILS_QUERY = gql`
  query shipmentById($shipmentId: String!) {
    wzaShipmentById(shipmentId: $shipmentId) {
      packages {
        waybill {
          waybillId
        }
        height
        length
        weight
        width
        packaging
      }
      description
      additionalProperties
      shipmentId
      carrierShipmentId
    }
  }
`;
