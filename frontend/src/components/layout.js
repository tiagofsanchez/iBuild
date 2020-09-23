/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import styled from "@emotion/styled";

import HeroHeader from "../components/ui/heroHeader";
import Hero from '../components/ui/hero';
import Menu from "./menu";
import Backdrop from "../components/ui/backdrop";
import Footer from "../components/ui/footer";

const LayoutContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: 50px;
  overflow:hidden;
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-rows: repeat (2, auto);
`;



export const Layout = ({ children, withHero }) => {
  const [isOpen, setIsOpen] = useState(false);
  const backdropHandler = () => setIsOpen(!isOpen);

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
      <Footer/>
    </div>
  );
};

export const LandingPageLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const backdropHandler = () => setIsOpen(!isOpen);

  return (
    <LayoutContainer>
      <Hero />
      <header sx={{ variant: `layout.header` }}>
        <Menu backdropHandler={backdropHandler} isOpen={isOpen} />
      </header>
      <main>{children}</main>
      {isOpen && <Backdrop />}
      <Footer />
    </LayoutContainer>
  );
};
