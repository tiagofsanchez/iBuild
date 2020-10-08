import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";
import {
  LightNewsletterForm,
} from "../components/shared/newsletterForm";

export default {
  title: `Example/Newsletter`,
};

export const NormalNewsletter = () => (
  <ThemeProvider theme={theme}>
    <h1>Normal Newsletter</h1>
    <p>Unfortunately it is not working because of the static query</p>
  </ThemeProvider>
);

export const SmallNewsletter = () => (
  <ThemeProvider theme={theme} >
    <h1>Small footer newsletter</h1>
    <LightNewsletterForm />
  </ThemeProvider>
);
