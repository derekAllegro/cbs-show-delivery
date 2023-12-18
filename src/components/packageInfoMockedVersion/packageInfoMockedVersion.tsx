import { Card, Col, Descriptions, Row } from "antd";
import React, { ReactElement } from "react";

import { darbMocks } from "./mocks/darbMocks";
import { darsMocks } from "./mocks/darsMocks";
import { wsadMocks } from "./mocks/wsadMocks";

const getPunctualityLabel = (isDelayed: boolean) => {
  return isDelayed ? "on time" : "delayed";
};

export const PackageInfoMockedVersion = (): ReactElement => {
  return (
    <div>
      <Descriptions>
        <Row gutter={[16, 16]}>
          <Col span={20}>
            <Card title={"Packages info - WZA"}>
              <p>
                [x] Declared dispatch:
                {
                  darbMocks.data.user.orders.boughtOrderGroupedByDelivery.data[0].parcelTracking.deliveryTime
                    .declaredDispatchDate
                }
              </p>
              <p>
                [x] Estimated delivery:
                {
                  darbMocks.data.user.orders.boughtOrderGroupedByDelivery.data[0].parcelTracking.deliveryTime
                    .estimatedDeliveryDates.to
                }
              </p>
              <p>[] Shipment: {getPunctualityLabel(darsMocks.data.user.orders.sold.data[0].score.dispatchInTime)} </p>
              ------------- smart
              <p>
                [x] Smart applies:{" "}
                {darbMocks.data.user.orders.boughtOrderGroupedByDelivery.data[0].delivery.isSmart ? "Yes" : "No"}{" "}
              </p>
              -------------------
              <p>[] Settlement: {darsMocks.data.user.orders.sold.data[0].delivery.costTransfers[0].tags[0]} </p>
              <p>
                [] <b>package[0]</b> Type: {wsadMocks.wzaShipmentById.packages[0].packaging}{" "}
              </p>
              <p>
                [] <b>package[0]</b> Weight (kg): {wsadMocks.wzaShipmentById.packages[0].weight}{" "}
              </p>
              <p>
                [] <b>package[0]</b> Length (cm): {wsadMocks.wzaShipmentById.packages[0].length}
              </p>
              <p>
                [] <b>package[0]</b> Width: {wsadMocks.wzaShipmentById.packages[0].width}{" "}
              </p>
              <p>
                [] <b>package[0]</b> Height: {wsadMocks.wzaShipmentById.packages[0].height}{" "}
              </p>
              <p>[x] Description: {wsadMocks.wzaShipmentById.description} </p>
              --------------- Addidtional Info (NICE TO HAVE)
              <p>
                [x] First mile carrier: {wsadMocks.wzaShipmentById.additionalProperties["FIRST_MILE_CARRIER"]} - pole
                opcjonalne{" "}
              </p>
              <p>
                [x] Last mile carrier: {wsadMocks.wzaShipmentById.additionalProperties["LAST_MILE_CARRIER"]} - pole
                opcjonalne{" "}
              </p>
              <p>[x] WZA ID: {wsadMocks.wzaShipmentById.shipmentId} </p>
              <p>[x] Carrier shipment ID: {wsadMocks.wzaShipmentById.carrierShipmentId} </p>
            </Card>
          </Col>
        </Row>
      </Descriptions>
    </div>
  );
};
