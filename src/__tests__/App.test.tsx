import React from "react";

import { render, waitFor } from "@cbs-ui/jest-utils";

import { App } from "../App";
import { MockedProvider } from "../testUtils/MockedProvider";

describe("Home Page", () => {
  it.matchesImageSnapshot("should render component when userId is set", () => {
    render(
      <MockedProvider>
        <App />
      </MockedProvider>,
    );
  });

  it("it should load mocked data", async () => {
    const component = render(
      <MockedProvider>
        <App />
      </MockedProvider>,
    );

    await waitFor(() => component.getByText("First name: Silene"));
  });
});
