import React from "react";
import { render } from "react-dom";

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

render(<Wrapper />, document.getElementById("root"));
