/** @jsx jsx */
import { ThemeProvider, jsx, IconButton } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";
import styled from "@emotion/styled";

import framsupIlustration from "../images/framsupIlustration.png";
import framsupLogo from "../images/framsupLogo.png";
import buy from "../images/buyBuildPartner.png";
import framing from "../images/problemFraming.png";
import validation from "../images/problemValidation.png";
import sourcing from "../images/sourcingStartups.png";
import unfair from "../images/unfairAdvantage.png";
import dealFlow from '../images/dealFlow.png'
import assumptionMapper from '../images/assumptionMapper.png'
import businessModel from '../images/businessModel.png'
import experimentDesigner from '../images/experimentDesigner.png'
import jobsToBeDone from '../images/jobsToBeDone.png'
import personaBuilder from '../images/personaBuilder.png'
import valueProposition from '../images/valueProposition.png'

import FBIcon from "../svgs/fbIcon.svg";
import LIIcon from "../svgs/linkedInIcon.svg";
import URLIcon from "../svgs/linkIcon.svg";
import MENUIcon from "../svgs/menuIcon.svg";
import CLOSEIcon from "../svgs/closeIcon.svg";

export default {
  title: "Example/Icons",
};

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const images = [
  { name: "Logo at the moment", image: framsupLogo },
  { name: "Hero", image: framsupIlustration },
  { name: "Buy Build Partner", image: buy },
  { name: "Problem Framing ", image: framing },
  { name: "Problem Validation", image: validation },
  { name: "Sourcing Startups", image: sourcing },
  { name: "Deal Flow", image: dealFlow },
  { name: "Unfair Advantage", image: unfair },
  { name: "Assumption Mapper", image: assumptionMapper },
  { name: "Business Model", image: businessModel },
  { name: "Experiment Designer", image: experimentDesigner },
  { name: "Jobs To Be Done", image: jobsToBeDone },
  { name: "Persona Builder", image: personaBuilder },
  { name: "Value Proposition", image: valueProposition },
];

const svgLogos = [
  { name: "Menu Icon", component: MENUIcon },
  { name: "Close Icon", component: CLOSEIcon },
];

const socialSharing = [
  { name: "Facebook", component: FBIcon },
  { name: "LinkedIn", component: LIIcon },
  { name: "URL icon", component: URLIcon },
];

export const FrameworksLogos = () => (
  <ThemeProvider theme={theme}>
    <h1>Framework PNG's logos</h1>
    <p>
      The Logos needed to be converted to PNG so that we can used them with
      cloudinary and graphQL could read them. You can find them in `src/images`
    </p>
    <ImageContainer>
      {images.map((image) => (
        <div key={image.name}>
          <p>{image.name}</p>
          <img src={image.image} width="80px" aria-hidden />
        </div>
      ))}
    </ImageContainer>
  </ThemeProvider>
);

export const PrimaryIcons = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>SVGs</h1>
      <ImageContainer>
        {svgLogos.map((logo) => (
          <div key={logo.name}>
            <p>{logo.name}</p>
            <img src={logo.component} aria-hidden />
          </div>
        ))}
      </ImageContainer>
    </ThemeProvider>
  );
};

export const SharingIcons = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>SVGs</h1>
      <ImageContainer>
        {socialSharing.map((logo) => (
          <div key={logo.name}>
            <p>{logo.name}</p>
            <IconButton sx={{ variant: `buttons.share`, bg: `primary` }}>
              <img src={logo.component} aria-hidden />
            </IconButton>
          </div>
        ))}
      </ImageContainer>
    </ThemeProvider>
  );
};
