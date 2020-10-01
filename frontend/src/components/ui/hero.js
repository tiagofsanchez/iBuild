/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
// import { useState, useEffect } from "react";

import HeroSVG from "../../svgs/heroSVG";

const Container = styled.div`
  position: absolute;
  top: 0px;
  display: inline-block;
  z-index: -100;
  height: auto;
`;

const HeroHeader = () => {
  //NOTE TO SELF: Window is not available during server side rendering, so defaulted to 5000px
  // For now I reckon that is ok

  // const [width, setwidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => setwidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // });

  return (
    <Container>
      <HeroSVG  />
    </Container>
  );
};

export default HeroHeader;
