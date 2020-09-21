/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Footer = styled.div`
  z-index: -10;
  height: 756px;
  left: 0px;
  bottom: 0px;
  @media (max-width: 690px) {
    height: 900px;
  }
`;

const HeroFooter = () => {
  return <Footer sx={{ bg: `backgroundHeader` }} />;
};

export default HeroFooter;