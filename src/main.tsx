import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./fonts.scss";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClientProvider } from "./shared/config/providers/QueryClientProvider";
import { ConfigProvider } from "antd";
import {
  overrideStyleButton,
  overrideStyleMenu,
} from "./shared/constants/constants";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider>
        <ConfigProvider
          theme={{
            components: {
              Menu: overrideStyleMenu,
              Button: overrideStyleButton,
            },
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}
