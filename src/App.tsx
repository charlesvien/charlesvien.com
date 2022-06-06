import React from "react";
import { ThemeProvider } from "styled-components";
import BlankLayout from "./layouts/BlankLayout";
import { baseTheme } from "./styles/themes/base";
import Landing from "./views/Landing";

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <BlankLayout>
      <Landing />
    </BlankLayout>
  </ThemeProvider>
);

export default App;
