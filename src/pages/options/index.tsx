import React from "react";
import { createRoot } from "react-dom/client";
import "@pages/options/index.css";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { DatesProvider } from "@mantine/dates";
import { MantineProvider } from "@mantine/core";
import { themeOverrides } from "@src/theme/theme";
import { TradeList } from "@src/components/trade-list/TradeList";

refreshOnUpdate("pages/options");

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(
    <React.StrictMode>
      <DatesProvider
        settings={{ locale: "en", firstDayOfWeek: 0, weekendDays: [0, 6] }}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={themeOverrides}
        >
          <TradeList />
        </MantineProvider>
      </DatesProvider>
    </React.StrictMode>
  );
}

init();
