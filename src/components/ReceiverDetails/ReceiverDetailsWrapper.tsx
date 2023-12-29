import { gql } from "graphql-tag";
import React from "react";

import { GraphqlQueryWrapper, useCBSQuery } from "@cbs-ui/api";

import { ReceiverDataContent } from "./ReceiverDataContent";
import { ShipmentByIdQuery, ShipmentByIdQueryVariables } from "./__generated__/ReceiverDetailsWrapper.graphql";

interface Props {
  shipmentId: string;
}

export const ReceiverDetailsWrapper = (props: Props): React.JSX.Element => {
  const { data, loading, errors, headers } = useCBSQuery<ShipmentByIdQuery, ShipmentByIdQueryVariables>(
    SHIPMENT_DETAILS_QUERY,
    {
      variables: {
        shipmentId: props.shipmentId,
      },
    },
  );

  const order = data?.wzaShipmentById?.order;
  const deliveryAddress = data?.wzaShipmentById?.deliveryAddress;

  return (
    <GraphqlQueryWrapper loading={loading} errors={errors} headers={headers}>
      <ReceiverDataContent order={order} deliveryAddress={deliveryAddress} />
    </GraphqlQueryWrapper>
  );
};

export const SHIPMENT_DETAILS_QUERY = gql`
  fragment orderDetails on Order {
    orderId
    orderBuyer {
      user {
        userId
        email
        firstName
        lastName
        phone
      }
      address {
        city
        countryCode
        street
        zipCode
      }
    }
    delivery {
      pickupPoint {
        name
        address {
          zipCode
          street
          city
        }
        description
      }
    }
  }

  fragment deliveryAddress on Address {
    city
    companyName
    firstName
    lastName
    street
    zipCode
    phoneNumber
    __typename
    pointName
  }

  query shipmentById($shipmentId: String!) {
    wzaShipmentById(shipmentId: $shipmentId) {
      deliveryAddress {
        ...deliveryAddress
      }

      order {
        ...orderDetails
      }
    }
  }
`;
