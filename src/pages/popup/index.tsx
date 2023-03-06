import React from "react";
import { createRoot } from "react-dom/client";
import "@pages/popup/index.css";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { MantineProvider } from "@mantine/core";
import { themeOverrides } from "@src/theme/theme";
import { DatesProvider } from "@mantine/dates";
import { AddTradeForm } from "@src/components/add-trade-form/AddTradeForm";

refreshOnUpdate("pages/popup");

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
          <AddTradeForm />
        </MantineProvider>
      </DatesProvider>
    </React.StrictMode>
  );
}

init();
