import { RouteComponentProps } from "@reach/router";
import { observer } from "mobx-react";
import React from "react";

import { GraphqlQueryWrapper } from "@cbs-ui/api";
import { useStores } from "@cbs-ui/store";
import { PermissionWrapper } from "@cbs-ui/utils";

import { RootStore } from "./store/RootStore";

interface Props {
  userId: string;
}

export const Home: React.FC<Props & RouteComponentProps> = observer(({ userId }) => {
  const { userStore } = useStores<RootStore>(["userStore"]);

  React.useEffect(() => {
    userStore.fetchUser(userId);
  }, []);

  return (
    <div>
      <GraphqlQueryWrapper loading={userStore.loading} errors={userStore.errors}>
        <PermissionWrapper
          data={userStore.user}
          render={(user) =>
            user?.__typename === "User" ? (
              <div>
                <div>Login: {user.login}</div>
                <div>First name: {user.firstName}</div>
                <div>Last name: {user.lastName}</div>
              </div>
            ) : (
              <div>User not found</div>
            )
          }
        />
      </GraphqlQueryWrapper>
    </div>
  );
});
