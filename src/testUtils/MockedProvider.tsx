import React, { PropsWithChildren } from "react";

import { MockedCBSProvider } from "@cbs-ui/jest-utils";

import { RootStore } from "../store/RootStore";

export const MockedProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <MockedCBSProvider rootStore={new RootStore()}>{children}</MockedCBSProvider>;
};
