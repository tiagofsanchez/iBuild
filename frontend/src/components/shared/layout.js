/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import styled from "@emotion/styled";

import HeroHeader from "../ui/heroHeader";
import Hero from "../ui/hero";
import Menu from "./menu";
import Backdrop from "../ui/backdrop";
import Footer from "./footer";

const LayoutContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: 50px;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-rows: repeat (2, auto);
`;


export const Layout = ({ children, withHero }) => {
  const [isOpen, setIsOpen] = useState(false);
  const backdropHandler = () => setIsOpen(!isOpen);

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <div>
      <LayoutContainer>
        <HeroContainer>
          {withHero && <HeroHeader />}
          <header sx={{ variant: `layout.header` }}>
            <Menu backdropHandler={backdropHandler} isOpen={isOpen} />
          </header>
        </HeroContainer>
        <main>{children}</main>
        {isOpen && <Backdrop />}
      </LayoutContainer>
      <Footer />
    </div>
  );
};

export const LandingPageLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const backdropHandler = () => setIsOpen(!isOpen);

  return (
    <div>
      <LayoutContainer>
        <Hero />
        <header sx={{ variant: `layout.header` }}>
          <Menu backdropHandler={backdropHandler} isOpen={isOpen} />
        </header>
        <main>{children}</main>
        {isOpen && <Backdrop />}
      </LayoutContainer>
      <Footer />
    </div>
  );
};
