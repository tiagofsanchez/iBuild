/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
// import { useState, useEffect } from "react";

const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 900px;
  z-index: -100;
  background: linear-gradient(180deg, #4E40EA 0%, rgba(73, 0, 255, 0.76) 45.31%, rgba(73, 0, 255, 0) 100%);
`;

const HeroHeader = () => {

  return (
    <Container />
  );
};

export default HeroHeader;