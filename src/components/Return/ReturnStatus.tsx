import { gql } from "graphql-tag";
import React from "react";

import { useCBSQuery } from "@cbs-ui/api";
import { GraphqlQueryWrapper } from "@cbs-ui/api";
import { PermissionWrapper } from "@cbs-ui/utils";

import { OrderByIdQuery, OrderByIdQueryVariables } from "./__generated__/ReturnStatus.graphql";

interface Props {
  orderId: string;
}
export const ReturnStatus = (props: Props): React.JSX.Element => {
  const { data, loading } = useCBSQuery<OrderByIdQuery, OrderByIdQueryVariables>(RETURN_STATUS_QUERY, {
    variables: {
      orderId: props.orderId,
    },
  });

  return (
    <GraphqlQueryWrapper loading={loading}>
      <PermissionWrapper data={data?.order?.__typename === "AllegroOrder" && data?.order.returnState} />
    </GraphqlQueryWrapper>
  );
};

const RETURN_STATUS_QUERY = gql`
  query orderById($orderId: ID!) {
    order(orderId: $orderId) {
      ... on AllegroOrder {
        returnState
      }
    }
  }
`;

const mockData = {
  order: {
    returnState: "RETURNED",
  },
};
