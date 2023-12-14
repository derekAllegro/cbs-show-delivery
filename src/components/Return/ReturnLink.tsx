import React from "react";

import { Maybe } from "@cbs-ui/types";
import { PermissionWrapper } from "@cbs-ui/utils";

interface Props {
  orderId: string;
  userId: Maybe<string>;
}
export const ReturnLink = ({ orderId, userId }: Props): React.JSX.Element => {
  if (typeof userId === "string") {
    return <a href={`https://returns.allegrogroup.com/#/buyers/${userId}/orders/${orderId}`}>Return admin</a>;
  }

  return <PermissionWrapper data={userId} />;
};
