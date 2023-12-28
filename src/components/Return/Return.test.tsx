import React from "react";

import { ErrorResponse, MockOverride, renderWithRouter, waitForLoadersDisappear } from "@cbs-ui/jest-utils";
import { ReturnState } from "@cbs-ui/types";

import { MockedProvider } from "../../testUtils/MockedProvider";
import { Return } from "./Return";
import { OrderByIdQuery } from "./__generated__/ReturnStatus.graphql";
import { ShipmentByIdQuery } from "./__generated__/ReturnWrapper.graphql";

describe("Return data component", () => {
  it("should render labels with data when fetched successfully", async () => {
    // given
    const mockOverride = new MockOverride();
    mockOverride.setMockOverride<OrderByIdQuery>({
      order: {
        returnState: ReturnState.RETURNED,
        __typename: "AllegroOrder",
      },
    });

    // when
    const component = renderWithRouter(
      <MockedProvider mockOverride={mockOverride}>
        <Return />
      </MockedProvider>,
    );

    // and when
    await waitForLoadersDisappear();

    // then
    component.getByText("Return");
    component.getByText("Returned");
    component.getByText("RETURNED");
    component.getByText("Details");
    component.getByText("Return admin");
  });

  it("should create link with proper url", async () => {
    // given
    const mockOverride = new MockOverride();
    mockOverride.setMockOverride<ShipmentByIdQuery>({
      wzaShipmentById: {
        order: {
          orderId: "3c774920-8202-11ee-b2b4-a7543d452647",
          orderBuyer: {
            user: {
              userId: "106736730",
            },
          },
        },
      },
    });

    // when
    const component = renderWithRouter(
      <MockedProvider mockOverride={mockOverride}>
        <Return />
      </MockedProvider>,
    );

    // and when
    await waitForLoadersDisappear();

    // then
    const link = component.getByText("Return admin").closest("a");
    expect(link).toHaveAttribute(
      "href",
      "https://returns.allegrogroup.com/#/buyers/106736730/orders/3c774920-8202-11ee-b2b4-a7543d452647",
    );
  });

  it("should render what?", async () => {
    // given
    const mockOverride = new MockOverride();
    mockOverride.setMockOverride<ShipmentByIdQuery>({
      wzaShipmentById: {
        order: {
          orderId: "3c774920-8202-11ee-b2b4-a7543d452647",
          orderBuyer: {
            user: {
              userId: "106736730",
            },
          },
        },
      },
    });

    // when
    const component = renderWithRouter(
      <MockedProvider errorResponse={new ErrorResponse(ErrorResponse.exampleErrorResponse)}>
        <Return />
      </MockedProvider>,
    );

    // and when
    await waitForLoadersDisappear();

    // then
    expect(component.getByText("-")).toBeInTheDocument();
  });
});
