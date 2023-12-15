import { gql } from "graphql-tag";

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
