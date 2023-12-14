import { Col, Row } from "antd";
import { observer } from "mobx-react";
import React from "react";
// INFO BR003 RouteProps is no longer a generic type, the way of using route properties has changed. If your code hasn't been covered by migration, you will have to adjust it manually. Read https://cbs.gh.allegrogroup.com/CBS_UI_EN/Development/Migrations/v_4_0_0/#routecomponentprops for instructions.
import { RouteProps } from "react-router-dom";

import { GraphqlQueryWrapper } from "@cbs-ui/api";
import { useStores } from "@cbs-ui/store";
import { PermissionWrapper } from "@cbs-ui/utils";

import { PackageInfo } from "./components/packageInfo/PackageInfo";
import { PackageInfoMockedVersion } from "./components/packageInfoMockedVersion/packageInfoMockedVersion";
import { RootStore } from "./store/RootStore";

interface Props {
  userId: string;
}

export const Home: React.FC<Props & RouteProps> = observer(({ userId }) => {
  const { userStore } = useStores<RootStore>(["userStore"]);

  React.useEffect(() => {
    userStore.fetchUser(userId);
  }, []);

  return (
    <Row>
      <Col xs={24} sm={24} md={12} lg={12} xl={6}>
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
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={6}>
        <PackageInfo shipmentId={"123"} />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={6}>
        <PackageInfoMockedVersion />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={6}>
        Col4
      </Col>
    </Row>
  );
});
