import React from "react";

import { MockOverride, renderWithRouter, screen, waitForLoadersDisappear, within } from "@cbs-ui/jest-utils";

import { MockedProvider } from "../../testUtils/MockedProvider";
import { ReceiverDetails } from "./ReceiverDetails";
import { ShipmentByIdQuery } from "./__generated__/ReceiverDetailsWrapper.graphql";

const elements = [
  { label: "User ID", value: "106736730" },
  { label: "Name and surname", value: "O G" },
  {
    label: "Recipient's address",
    value: `Wierzbięcice 1`,
  },
  {
    label: "Recipient's address",
    value: `60-688`,
  },
  {
    label: "Recipient's address",
    value: `Poznań`,
  },
  {
    label: "Delivery address",
    value: `Allegro One Box, zielony automat`,
  },
  {
    label: "Delivery address",
    value: `osiedle Marysieńki 25`,
  },
  {
    label: "Delivery address",
    value: `60-688`,
  },
  {
    label: "Delivery address",
    value: `Poznań`,
  },
  { label: "PUDO", value: "A00003LKR9" },
  { label: "Phone", value: "12 345 67 89" },
  { label: "E-mail", value: "olga.gortych@allegro.com" },
];

describe("Receiver Details component", () => {
  // given
  const mockOverride = new MockOverride();
  mockOverride.setMockOverride<ShipmentByIdQuery>({
    wzaShipmentById: {
      __typename: "WzaShipment",
      order: {
        orderId: "3c774920-8202-11ee-b2b4-a7543d452647",
        orderBuyer: {
          user: {
            userId: "106736730",
            email: "olga.gortych@allegro.com",
            firstName: "O",
            lastName: "G",
            phone: "+48 12 345 67 89",
            __typename: "User",
          },
          address: {
            city: "Poznań",
            countryCode: "PL",
            street: "Wierzbięcice 1",
            zipCode: "60-688",
            __typename: "OrderBuyerAddress",
          },
          __typename: "OrderBuyer",
        },
        delivery: {
          pickupPoint: {
            name: "Allegro One Box, zielony automat",
            address: {
              zipCode: "60-688",
              street: "osiedle Marysieńki 25",
              city: "Poznań",
              __typename: "OrderDeliveryPickupPointAddress",
            },
            description: null,
            __typename: "OrderDeliveryPickupPoint",
          },
          __typename: "OrderDelivery",
        },
        parcelTracking: {
          waybills: [
            {
              carrier: {
                trackingUrl: "https://allegro.pl/kampania/one/kurier/sledzenie-paczki?numer=A00003LKR9",
                __typename: "NamedCarrier",
              },
              waybillId: "A00003LKR9",
              __typename: "Waybill",
            },
          ],
          __typename: "ParcelTracking",
        },
        __typename: "Order",
      },
    },
  });

  it.each(elements)(`should render label and value %s, when the data was downloaded successfully `, async (element) => {
    // given
    renderWithRouter(
      <MockedProvider mockOverride={mockOverride}>
        <ReceiverDetails />
      </MockedProvider>,
    );

    // when
    await waitForLoadersDisappear();

    const label = screen.getByText(element.label);
    const parentElement = label.closest('[data-testid="cbs-data-list-element"]') as HTMLElement;
    const withinParent = within(parentElement);
    const value = withinParent.getByText(new RegExp(`${element.value}`));

    // then
    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
