/** @jsx jsx */
import { ThemeProvider, jsx } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";

export default {
  title: "Example/Typography",
};

export const Typography = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>This is my H1</h1>
      <h2>This is my H2</h2>
      <h3>This is my H3</h3>
      <h4>This is my H4</h4>
      <p>
        My normal paragraph, but I also have defined taglines and captions in
        case we need that. All typography was design with responsiveness in mind
        and the sizes will change depending on the screen sizes
      </p>
      <p sx={{ variant: `text.tagline` }}>I am a tagline</p>
      <p sx={{ variant: `text.caption` }}>I am a caption</p>
    </ThemeProvider>
  );
};
