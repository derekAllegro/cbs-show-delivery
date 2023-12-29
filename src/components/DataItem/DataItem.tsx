import { Row } from "antd";
import { GraphQLError } from "graphql/error/GraphQLError";
import React, { JSXElementConstructor, ReactElement, ReactPortal } from "react";
import styled from "styled-components";

import { GraphqlQueryWrapper } from "@cbs-ui/api/lib/components/GraphqlQueryWrapper";

export interface DataItemProps {
  label: string;
  children:
    | (ReactElement<any, string | JSXElementConstructor<any>> &
        (string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal | undefined))
    | null;
  loading: boolean;
  errors?: GraphQLError[];
  headers?: Headers | null | undefined;
}

export const DataItem = ({ label, loading, errors, headers, children }: DataItemProps): JSX.Element => {
  return (
    <Row wrap={false}>
      <DataItemLabel>{label}</DataItemLabel>
      <GraphqlQueryWrapper loading={loading} errors={errors} headers={headers}>
        <div>{children}</div>
      </GraphqlQueryWrapper>
    </Row>
  );
};

const DataItemLabel = styled.div`
  flex: 0 0 140px;
  color: var(--d-text-secondary);
`;
