import React from "react";
import { createRoot } from "react-dom/client";

import { CBSProvider } from "@cbs-ui/components";

import { App } from "./App";
import { featureFlags } from "./featureFlags";
import { RootStore } from "./store/RootStore";

const Wrapper = () => {
  return (
    <CBSProvider
      rootStore={new RootStore(window.CBS_CONFIGURATION, featureFlags)}
      processName={APP_NAME}
      version={APP_VERSION}
    >
      <App />
    </CBSProvider>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<Wrapper />);
