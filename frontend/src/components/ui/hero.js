/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import HeroSVG from "../../svgs/heroSVG";

const Container = styled.div`
  position: absolute;
  top: 0px;
  display: inline-block;
  z-index: -100;
  height: auto;
`;

const HeroHeader = () => {
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <Container>
      <HeroSVG size={width} />
    </Container>
  );
};

export default HeroHeader;
