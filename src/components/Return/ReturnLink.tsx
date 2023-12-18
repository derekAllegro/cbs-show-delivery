import { Button } from "antd";
import React from "react";

import { Maybe } from "@cbs-ui/types";
import { PermissionWrapper } from "@cbs-ui/utils";

interface Props {
  orderId: string;
  userId: Maybe<string>;
}
export const ReturnLink = ({ orderId, userId }: Props): React.JSX.Element => {
  return (
    <PermissionWrapper
      data={userId}
      render={(userId) => {
        return (
          <Button type="link" href={`https://returns.allegrogroup.com/#/buyers/${userId}/orders/${orderId}`}>
            Return admin
          </Button>
        );
      }}
    />
  );
};
