import { gql } from "graphql-tag";

// TODO: skrócić to query
export const SHIPMENT_DETAILS_QUERY = gql`
  query shipmentById($shipmentId: String!) {
    wzaShipmentById(shipmentId: $shipmentId) {
      additionalServices
      codAccount
      codAmount {
        amount
        currency
      }
      deliveryAddress {
        city
        companyName
        firstName
        lastName
        street
        zipCode
        phoneNumber
        pointName
      }
      insuranceAmount {
        amount
        currency
      }
      labelAddress {
        city
        companyName
        zipCode
        street
        firstName
        lastName
        email
        phoneNumber
      }
      order {
        orderId
        orderBuyer {
          user {
            userId
            email
          }
          firstName
          lastName
          company
          address {
            city
            street
            zipCode
          }
        }
        seller {
          userId
        }
      }
      packages {
        waybill {
          currentParcelStatus {
            code
            name
            reachedAt
          }
          parcelDetailedHistory {
            date
            description
          }
          waybillId
          carrier {
            id
          }
        }
        height
        length
        weight
        width
        packaging
      }
      pickupAddress {
        city
        companyName
        firstName
        lastName
        street
        zipCode
        phoneNumber
        pointName
      }
      pickups {
        pickupDate
        carrierPickupId
      }
      shipmentId
      carrierShipmentId
      description
      canceledDate
      wzaContract {
        id
      }
      additionalProperties
    }
  }
`;
