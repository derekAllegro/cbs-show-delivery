import { Descriptions } from "antd";
import { gql } from "graphql-tag";
import React from "react";

import { GraphqlQueryWrapper, useCBSQuery } from "@cbs-ui/api";
import { UserData } from "@cbs-ui/components";
import { PermissionWrapper } from "@cbs-ui/utils";

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

  return (
    <GraphqlQueryWrapper loading={loading} errors={errors} headers={headers}>
      <PermissionWrapper data={order} render={(order) => <ReceiverDataContent receiverData={order} />} />
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

  query shipmentById($shipmentId: String!) {
    wzaShipmentById(shipmentId: $shipmentId) {
      __typename
      order {
        ...orderDetails
      }
    }
  }
`;
