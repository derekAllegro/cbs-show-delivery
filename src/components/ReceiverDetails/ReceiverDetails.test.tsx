import React from "react";

import { MockOverride, renderWithRouter, screen, waitForLoadersDisappear, within } from "@cbs-ui/jest-utils";

import { MockedProvider } from "../../testUtils/MockedProvider";
import { verifyValueWithLabelDataItem } from "../../testUtils/helper";
import { ReceiverDetails } from "./ReceiverDetails";
import { ShipmentByIdQuery } from "./__generated__/ReceiverDetailsWrapper.graphql";

describe("Receiver Details component", () => {
  const elements = [
    { label: "User ID", value: "106736730" },
    { label: "Name and surname", value: "TestoweImie" },
    { label: "Name and surname", value: "TestoweNazwisko" },
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
    { label: "PUDO", value: "TestPointName" },
    { label: "Phone", value: "48 12 345 67 89" },
    { label: "E-mail", value: "olga.gortych@allegro.com" },
  ];

  it.each(elements)(`should render label and value %s, when the data was downloaded successfully `, async (element) => {
    // given
    const mockOverride = new MockOverride();
    mockOverride.setMockOverride<ShipmentByIdQuery>({
      wzaShipmentById: {
        deliveryAddress: {
          city: "Poznań",
          companyName: null,
          firstName: "o",
          lastName: "g",
          street: "Wierzbięcice 2",
          zipCode: "60-688",
          phoneNumber: "+48123456789",
          __typename: "Address",
          pointName: "TestPointName",
        },
        order: {
          orderId: "3c774920-8202-11ee-b2b4-a7543d452647",
          orderBuyer: {
            user: {
              userId: "106736730",
              email: "olga.gortych@allegro.com",
              firstName: "TestoweImie",
              lastName: "TestoweNazwisko",
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
          __typename: "Order",
        },
        __typename: "WzaShipment",
      },
    });

    // when
    renderWithRouter(
      <MockedProvider mockOverride={mockOverride}>
        <ReceiverDetails />
      </MockedProvider>,
    );
    await waitForLoadersDisappear();

    // then
    expect(verifyValueWithLabelDataItem(element.label, element.value)).toBeTruthy();
  });

  it(`should render '-', when PUDO is null`, async () => {
    // given
    const mockOverride = new MockOverride();
    mockOverride.setMockOverride<ShipmentByIdQuery>({
      wzaShipmentById: {
        deliveryAddress: {
          city: "Poznań",
          companyName: null,
          firstName: "o",
          lastName: "g",
          street: "Wierzbięcice 2",
          zipCode: "60-688",
          phoneNumber: "+48123456789",
          __typename: "Address",
          pointName: null,
        },
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
          __typename: "Order",
        },
        __typename: "WzaShipment",
      },
    });

    // when
    renderWithRouter(
      <MockedProvider mockOverride={mockOverride}>
        <ReceiverDetails />
      </MockedProvider>,
    );
    await waitForLoadersDisappear();

    // then
    expect(verifyValueWithLabelDataItem("PUDO", "-")).toBeTruthy();
  });

  const elementsFailure = [
    { label: "User ID", value: "-" },
    { label: "Name and surname", value: "-" },
    {
      label: "Recipient's address",
      value: "-",
    },
    {
      label: "Delivery address",
      value: "-",
    },
    { label: "PUDO", value: "-" },
    { label: "Phone", value: "-" },
    { label: "E-mail", value: "-" },
  ];
  it.each(elementsFailure)(
    `should render label and value with '-' %s, when the data was downloaded failure `,
    async (element) => {
      // given
      const mockOverride = new MockOverride();
      mockOverride.setMockOverride<ShipmentByIdQuery>({
        wzaShipmentById: {
          deliveryAddress: null,
          order: null,
          __typename: "WzaShipment",
        },
      });

      // when
      renderWithRouter(
        <MockedProvider mockOverride={mockOverride}>
          <ReceiverDetails />
        </MockedProvider>,
      );
      await waitForLoadersDisappear();

      // then
      expect(verifyValueWithLabelDataItem(element.label, element.value)).toBeTruthy();
    },
  );
});
