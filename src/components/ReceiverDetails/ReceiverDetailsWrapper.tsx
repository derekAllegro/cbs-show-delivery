import { Flex } from "antd";
import { gql } from "graphql-tag";
import React from "react";

import { useCBSQuery } from "@cbs-ui/api";
import { AllRequired, PermissionWrapper } from "@cbs-ui/utils/lib/PermissionWrapper/PermissionWrapper";

import { DataItem } from "../DataItem/DataItem";
import { ShipmentByIdQuery, ShipmentByIdQueryVariables } from "./__generated__/ReceiverDetailsWrapper.graphql";

interface Props {
  shipmentId: string;
}

export const ReceiverDetailsWrapper = (props: Props): React.JSX.Element => {
  const { data, loading, errors, headers } = useCBSQuery<ShipmentByIdQuery, ShipmentByIdQueryVariables>(
    SHIPMENT_DETAILS_QUERY,
    {
      variables: {
        shipmentId: props.shipmentId,
      },
    },
  );

  const user = data?.wzaShipmentById?.order?.orderBuyer?.user;
  const recipientAddres = data?.wzaShipmentById?.order?.orderBuyer?.address;
  const pickupPoint = data?.wzaShipmentById?.order?.delivery?.pickupPoint;
  const deliveryAddress = data?.wzaShipmentById?.deliveryAddress;

  return (
    <>
      <DataItem label="User ID" loading={loading} errors={errors} headers={headers}>
        <PermissionWrapper data={user?.userId} />
      </DataItem>
      <DataItem label="Name and surname" loading={loading}>
        <>
          <PermissionWrapper data={user?.firstName} />
          <PermissionWrapper data={user?.lastName} />
        </>
      </DataItem>
      <DataItem label="Recipient's address" loading={loading}>
        <PermissionWrapper
          data={
            new AllRequired({
              street: recipientAddres?.street,
              zipCode: recipientAddres?.zipCode,
              city: recipientAddres?.city,
            })
          }
          render={({ data: { street, city, zipCode } }) => (
            <>
              {street} <br />
              {zipCode} {city}
            </>
          )}
        />
      </DataItem>
      <DataItem label="Delivery address" loading={loading}>
        <Flex>
          <span>
            <PermissionWrapper data={pickupPoint?.name} />
            <PermissionWrapper
              data={pickupPoint?.description}
              render={(description) => <>({description})</>}
              renderEmpty={() => null}
            />
            <br />
            <PermissionWrapper data={pickupPoint?.address?.street} />
            <br />
            <PermissionWrapper
              data={new AllRequired({ zipCode: pickupPoint?.address?.zipCode, city: pickupPoint?.address?.city })}
              render={({ data: { city, zipCode } }) => (
                <>
                  {zipCode} {city}
                </>
              )}
            />
            <br />
          </span>
        </Flex>
      </DataItem>
      <DataItem label="PUDO" loading={loading}>
        <PermissionWrapper data={deliveryAddress?.pointName} />
      </DataItem>
      <DataItem label="Phone" loading={loading}>
        <PermissionWrapper data={user?.phone} />
      </DataItem>
      <DataItem label="E-mail" loading={loading}>
        <PermissionWrapper data={user?.email} />
      </DataItem>
    </>
  );
};

export const SHIPMENT_DETAILS_QUERY = gql`
  fragment orderDetails on Order {
    orderId
    orderBuyer {
      user {
        userId
        email
        firstName
        lastName
        phone
      }
      address {
        city
        countryCode
        street
        zipCode
      }
    }
    delivery {
      pickupPoint {
        name
        address {
          zipCode
          street
          city
        }
        description
      }
    }
  }

  fragment deliveryAddress on Address {
    city
    companyName
    firstName
    lastName
    street
    zipCode
    phoneNumber
    __typename
    pointName
  }

  query shipmentById($shipmentId: String!) {
    wzaShipmentById(shipmentId: $shipmentId) {
      deliveryAddress {
        ...deliveryAddress
      }

      order {
        ...orderDetails
      }
    }
  }
`;
