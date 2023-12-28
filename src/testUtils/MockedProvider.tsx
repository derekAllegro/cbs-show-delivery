import React from "react";

import { ErrorResponse, MockOverride, MockedCBSProvider } from "@cbs-ui/jest-utils";

import { RootStore } from "../store/RootStore";

interface Props {
  rootStore?: RootStore;
  mockOverride?: MockOverride;
  errorResponse?: ErrorResponse;
  children: React.ReactNode;
}

export const MockedProvider = ({
  children,
  mockOverride,
  rootStore = new RootStore(),
  errorResponse,
}: Props): React.JSX.Element => {
  return (
    <MockedCBSProvider rootStore={rootStore} mockOverride={mockOverride} errorResponse={errorResponse}>
      {children}
    </MockedCBSProvider>
  );
};
