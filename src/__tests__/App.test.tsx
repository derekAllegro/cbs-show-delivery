import React from "react";

import { renderWithRouter, waitFor } from "@cbs-ui/jest-utils";

import { App } from "../App";
import { MockedProvider } from "../testUtils/MockedProvider";

describe("Home Page", () => {
  it.matchesImageSnapshot("should render component when userId is set", () => {
    renderWithRouter(
      <MockedProvider>
        <App />
      </MockedProvider>,
    );
  });

  it("it should load mocked data", async () => {
    const component = renderWithRouter(
      <MockedProvider>
        <App />
      </MockedProvider>,
    );

    await waitFor(() => component.getByText("First name: Silene"));
  });
});
