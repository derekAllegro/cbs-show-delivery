import { Descriptions } from "antd";
import { gql } from "graphql-tag";
import React from "react";

import { GraphqlQueryWrapper, useCBSQuery } from "@cbs-ui/api";
import { PermissionWrapper } from "@cbs-ui/utils";

import { ReturnLink } from "./ReturnLink";
import { ReturnStatus } from "./ReturnStatus";
import { ShipmentByIdQuery, ShipmentByIdQueryVariables } from "./__generated__/ReturnWrapper.graphql";

interface Props {
  shipmentId: string;
}
export const ReturnWrapper = (props: Props) => {
  const { data, loading } = useCBSQuery<ShipmentByIdQuery, ShipmentByIdQueryVariables>(SHIPMENT_DETAILS_QUERY, {
    variables: {
      shipmentId: props.shipmentId,
    },
  });

  const orderId = data?.wzaShipmentById?.order?.orderId;
  const userId = data?.wzaShipmentById?.order?.orderBuyer?.user?.userId;
  return (
    <Descriptions column={1} size="small" labelStyle={{ fontWeight: 500 }}>
      <Descriptions.Item label="Returned">
        <GraphqlQueryWrapper loading={loading}>
          {typeof orderId === "string" ? <ReturnStatus orderId={orderId} /> : <PermissionWrapper data={orderId} />}
        </GraphqlQueryWrapper>
      </Descriptions.Item>
      <Descriptions.Item label="Details">
        <GraphqlQueryWrapper loading={loading}>
          {typeof orderId === "string" ? (
            <ReturnLink orderId={orderId} userId={userId} />
          ) : (
            <PermissionWrapper data={orderId} />
          )}
        </GraphqlQueryWrapper>
      </Descriptions.Item>
    </Descriptions>
  );
};

export const SHIPMENT_DETAILS_QUERY = gql`
  query shipmentById($shipmentId: String!) {
    wzaShipmentById(shipmentId: $shipmentId) {
      order {
        orderId
        orderBuyer {
          user {
            userId
          }
        }
      }
    }
  }
`;

const mockData = {
  wzaShipmentById: {
    order: {
      orderId: "3c774920-8202-11ee-b2b4-a7543d452647",
      orderBuyer: {
        user: {
          userId: "106736730",
        },
      },
    },
  },
};