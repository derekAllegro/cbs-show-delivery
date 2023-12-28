import React from "react";

import { useStores } from "@cbs-ui/store";
import { Maybe } from "@cbs-ui/types";
import { PermissionWrapper } from "@cbs-ui/utils";

import { TextLink } from "../TextLink/TextLink";

interface Props {
  orderId: string;
  userId: Maybe<string>;
}

export const ReturnLink = ({ orderId, userId }: Props): React.JSX.Element => {
  const { configurationStore } = useStores(["configurationStore"]);

  return (
    <PermissionWrapper
      data={userId}
      render={(userId) => {
        return <TextLink href={configurationStore.getUrlForReturnsAdmin(userId, orderId)}>Return admin</TextLink>;
      }}
    />
  );
};
