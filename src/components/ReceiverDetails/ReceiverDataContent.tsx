import { Flex } from "antd";
import React from "react";

import { Maybe } from "@cbs-ui/types";
import { AllRequired, PermissionWrapper, removedFields } from "@cbs-ui/utils";
import { DataList } from "@cbs-ui/vivo";

import { DeliveryAddressFragment, OrderDetailsFragment } from "./__generated__/ReceiverDetailsWrapper.graphql";

const fields = [
  "User ID",
  "Name and surname",
  "Recipient's address",
  "Delivery address",
  "PUDO",
  "Phone",
  "E-mail",
] as const;

type Fields = typeof fields;
type Field = Fields[number];

interface ReceiverDataContentProps {
  order: Maybe<{ readonly __typename: "Order" } & OrderDetailsFragment>;
  deliveryAddress: Maybe<
    {
      readonly __typename: "Address";
    } & DeliveryAddressFragment
  >;
  className?: string;
}

export const ReceiverDataContent = ({
  order,
  deliveryAddress,
  className,
}: ReceiverDataContentProps): React.JSX.Element => {
  const user = order?.orderBuyer?.user;
  const pickupPoint = order?.delivery?.pickupPoint;
  const recipientAddres = order?.orderBuyer?.address;

  const fields: Record<Field, React.ReactNode> = {
    "User ID": <PermissionWrapper data={user?.userId} />,
    "Name and surname": (
      <PermissionWrapper
        data={
          new AllRequired({
            firstName: user?.firstName,
            lastName: user?.lastName,
          })
        }
        render={({ data: { firstName, lastName } }) => (
          <>
            {firstName} {lastName}
          </>
        )}
      />
    ),
    "Recipient's address": (
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
    ),
    "Delivery address": (
      <Flex>
        <span className={className}>
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
    ),
    PUDO: <PermissionWrapper data={deliveryAddress?.pointName} />,
    Phone: <PermissionWrapper data={user?.phone} />,
    "E-mail": <PermissionWrapper data={user?.email} />,
  };

  const dataList = removedFields(fields, []);

  return <DataList className={className} dataList={dataList} />;
};
