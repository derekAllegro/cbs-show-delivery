import { Router } from "@reach/router";
import React from "react";

import { Home } from "./Home";

export const App: React.FC = () => {
  return (
    <Router basepath={BASE_PATH}>
      <Home path="/" userId="93405434" />
    </Router>
  );
};
