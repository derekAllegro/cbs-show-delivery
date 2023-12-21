import { Card } from "antd";
import { gql } from "graphql-tag";
import React from "react";

import { GraphqlQueryWrapper, useCBSQuery } from "@cbs-ui/api";
import { PermissionWrapper } from "@cbs-ui/utils";

import { SHIPMENT_ID } from "../../config";
import { ReceiverDetailsWrapper } from "./ReceiverDetailsWrapper";
import { DataKeyQuery, DataKeyQueryVariables } from "./__generated__/Return.graphql";

export const ReceiverDetails = (): React.JSX.Element => {
  const { data, loading, errors, headers } = useCBSQuery<DataKeyQuery, DataKeyQueryVariables>(DATA_KEY_QUERY, {
    variables: {
      searchText: SHIPMENT_ID,
    },
  });

  return (
    <Card size="small" title={"Receiver details"}>
      <GraphqlQueryWrapper loading={loading} errors={errors} headers={headers}>
        <PermissionWrapper
          data={data?.findWzaDataKey?.shipmentId}
          render={(shipmentId) => {
            return <ReceiverDetailsWrapper shipmentId={shipmentId} />;
          }}
        />
      </GraphqlQueryWrapper>
    </Card>
  );
};

export const DATA_KEY_QUERY = gql`
  query dataKey($searchText: String!) {
    findWzaDataKey(searchText: $searchText) {
      shipmentId
    }
  }
`;
