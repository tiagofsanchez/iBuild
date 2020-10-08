import React from "react";
import { Button, ThemeProvider } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";

export default {
  title: "Example/Button",
};

export const Primary = () => (
  <ThemeProvider theme={theme}>
    <Button>Primary</Button>
  </ThemeProvider>
);
