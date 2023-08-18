import React from "react";

import { MockedCBSProvider } from "@cbs-ui/jest-utils";

import { RootStore } from "../store/RootStore";

export const MockedProvider: React.FC = ({ children }) => {
  return <MockedCBSProvider rootStore={new RootStore()}>{children}</MockedCBSProvider>;
};
