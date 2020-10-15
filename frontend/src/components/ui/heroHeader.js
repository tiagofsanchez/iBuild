/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 420px;
`;

const HeroHeader = () => {
  return <Container sx={{ backgroundColor: `naturalDark` }} />;
};

export default HeroHeader;
