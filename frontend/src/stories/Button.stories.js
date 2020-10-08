/** @jsx jsx */
import { Button, ThemeProvider, jsx } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";

export default {
  title: "Example/Button",
};

export const PrimaryActive = () => (
  <ThemeProvider theme={theme}>
    <h4 sx={{ color: `text` }}>Button when active</h4>
    <Button>Primary</Button>
  </ThemeProvider>
);

export const PrimaryInactive = () => (
  <ThemeProvider theme={theme}>
    <h4 sx={{ color: `text` }}> Button when inactive</h4>
    <Button
      disabled={true}
      sx={{ bg: `backgroundHeader`, border: `2px solid`, color: `primary` }}
    >
      Inactive
    </Button>
  </ThemeProvider>
);
