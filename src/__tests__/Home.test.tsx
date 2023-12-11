import React from "react";

import { render, waitFor } from "@cbs-ui/jest-utils";
import { userNotFoundID } from "@cbs-ui/jest-utils/lib/mocks/mockedValues/constants";

import { Home } from "../Home";
import { MockedProvider } from "../testUtils/MockedProvider";

describe("Home Page", () => {
  it("it should show that user was not found", async () => {
    const component = render(
      <MockedProvider>
        <Home userId={userNotFoundID} />
      </MockedProvider>,
    );

    await waitFor(() => component.getByText("User not found"));
  });
});
