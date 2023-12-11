import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { BubbleError } from "@cbs-ui/components";

import { Home } from "./Home";

export const App: React.FC = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home userId="93405434" />,
      },
    ],
    {
      basename: BASE_PATH,
    },
  );

  return <RouterProvider router={router} fallbackElement={<BubbleError />}></RouterProvider>;
};
