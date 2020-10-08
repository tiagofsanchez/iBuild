/** @jsx jsx */
import { ThemeProvider, jsx } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";
import styled from "@emotion/styled";

import iMac from "../images/iMac.png";
import iKLogo from "../images/iKLogo.png";
import buy from "../images/buyBuildPartner.png";
import framing from "../images/problemFraming.png";
import validation from "../images/problemValidation.png";
import sourcing from "../images/sourcingStartups.png";
import unfair from "../images/unfairAdvantage.png";

export default {
  title: "Example/Icons",
};

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const images = [
  { name: "Logo at the moment", image: iKLogo },
  { name: "Hero", image: iMac },
  { name: "Buy Build Partner", image: buy },
  { name: "Problem Framing ", image: framing },
  { name: "Problem Validation", image: validation },
  { name: "Sourcing Startups", image: sourcing },
  { name: "Unfair Advantage", image: unfair },
];

export const FrameworksImages = () => (
  <ThemeProvider theme={theme}>
    <ImageContainer>
      {images.map((image) => (
        <div key={image.name}>
          <p>{image.name}</p>
          <img src={image.image} width="80px" />
        </div>
      ))}
    </ImageContainer>
  </ThemeProvider>
);
