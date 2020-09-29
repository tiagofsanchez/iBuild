/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import HeroFooter from "../ui/heroFooter";
import About from "../aboutFooter";
import { LightNewsletterForm } from "../newsletterForm";

const SignUpContainer = styled.div`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 50;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 40px;
  @media (max-width: 690px) {
    grid-template-columns: auto;
  }
`;

const FooterSubscription = () => {
  return (
    <div>
      <SignUpContainer sx={{ variant: `layout.frameworkFooter` }}>
        <LightNewsletterForm />
        <About />
      </SignUpContainer>
      <HeroFooter />
    </div>
  );
};


export default FooterSubscription