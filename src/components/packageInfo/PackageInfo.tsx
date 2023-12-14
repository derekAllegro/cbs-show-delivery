import { Card, Col, Descriptions, Divider, Row, Spin } from "antd";
import React, { ReactElement } from "react";

type PropsWithShipmentId = {
  shipmentId: string;
};

export const PackageInfo = ({ shipmentId }: PropsWithShipmentId): ReactElement => {
  const data: any = {};

  // const { data, loading } = useCBSQuery<WzaShipmentByIdResponse, WzaShipmentByIdQueryVariables>(
  //   SHIPMENT_DETAILS_QUERY,
  //   {
  //     variables: {
  //       shipmentId: shipmentId as string,
  //     },
  //   },
  // );

  if (!data) {
    return <div>nie ma danych :(</div>;
  }

  return (
    <div>
      <Descriptions>
        <Col span={8}>
          <Card title={"Packages info"}>
            <Descriptions>
              <Descriptions.Item label={"Declared dispatch"}>TODO</Descriptions.Item>
            </Descriptions>

            <Descriptions>
              <Descriptions.Item label={"Estimated delivery"}>TODO</Descriptions.Item>
            </Descriptions>

            <Descriptions>
              <Descriptions.Item label={"Shipment on time"}>TODO</Descriptions.Item>
            </Descriptions>

            <Divider orientation="left" plain={true} orientationMargin={10}>
              Smart
            </Divider>

            <Descriptions>
              <Descriptions.Item label={"SMART applies"}>TODO</Descriptions.Item>
            </Descriptions>

            <Descriptions>
              <Descriptions.Item label={"Settlement"}>TODO</Descriptions.Item>
            </Descriptions>

            <Descriptions>
              <Descriptions.Item label={"Type"}>TODO</Descriptions.Item>
            </Descriptions>

            <Descriptions>
              <Descriptions.Item label={"Weight (kg)"}>TODO:</Descriptions.Item>
            </Descriptions>

            <Descriptions>
              <Descriptions.Item label={"Length (cm)"}>TODO</Descriptions.Item>
            </Descriptions>

            <Descriptions>
              <Descriptions.Item label={"Width"}>TODO</Descriptions.Item>
            </Descriptions>

            <Descriptions>
              <Descriptions.Item label={"Height"}>TODO</Descriptions.Item>
            </Descriptions>

            <Divider orientation="left" plain={true} orientationMargin={10}>
              Additional Info
            </Divider>

            <Descriptions>
              <Descriptions.Item label={"First mile carrier"}>TODO</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label={"Last mile carrier"}>TODO</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label={"WZA ID"}>TODO</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label={"Carrier shipment ID"}>TODO</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Descriptions>
    </div>
  );
};
