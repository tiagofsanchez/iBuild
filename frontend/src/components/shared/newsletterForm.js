/** @jsx jsx */
import { jsx, Box, Input, Button } from "theme-ui";
import { useState } from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";

import useImage from "../../hooks/useImages";

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: 200px 1fr;
  }
`;

const IconContainer = styled.div`
  display: grid;
  align-content: center;
  border-radius: 15px 0px 0px 15px;
  @media (max-width: 768px) {
    border-radius: 15px 15px 0px 0px;
  }
`;

const SignUpContainer = styled.div`
  width: 300px;
  margin: auto;
  padding: 50px 0px;
  @media (max-width: 880px) {
    width: 90%;
  }
`;

const LightSignUpContainer = styled.div`
  width: 300px;
`;

const FormContainer = styled.form`
  display: grid;
  grid-gap: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 10px;
`;

export const NewsletterForm = () => {
  
  const [value, setValue] = useState({
    name: "",
    email: ""
  });
  const { imgHero } = useImage();
  console.log(value);

  return (
    <Box sx={{ variant: `cards.formCard` }}>
      <Container>
        <IconContainer sx={{ bg: `naturalDark` }}>
          <div sx={{ width: `auto` }}>
            <Img fluid={imgHero} />
          </div>
        </IconContainer>
        <SignUpContainer>
          <h1 sx={{ mt: `0px` }}>Sign up</h1>
          <p>
            Finally a place where you can access everything about
            innovation.Unlock the jargon and get clarity.
          </p>
          <FormContainer>
            <GridContainer>
              <Input placeholder="Your name" />
              <Input placeholder="Your email" />
            </GridContainer>
            <GridContainer>
              <Button>Sign up</Button>
              <p sx={{ variant: `text.tagline`, m: `0px` }}>
                By clicking on Sing up you agree to our Terms of service and
                privacy policy.
              </p>
            </GridContainer>
          </FormContainer>
        </SignUpContainer>
      </Container>
    </Box>
  );
};

export const LightNewsletterForm = () => {
  const [value, setValue] = useState({
    name: "",
    email: ""
  });
  console.log(value);
  return (
    <LightSignUpContainer>
      <h4 sx={{ mt: `0px`, color: `text` }}>Our newsletter</h4>
      <p>
        Finally a place where you can access everything about innovation.Unlock
        the jargon and get clarity.
      </p>
      <FormContainer>
        <GridContainer>
          <Input placeholder="Your name" />
          <Input placeholder="Your email" />
        </GridContainer>
        <GridContainer>
          <Button>Sign up</Button>
          <p sx={{ variant: `text.tagline`, m: `0px` }}>
            By clicking on Sing up you agree to our Terms of service and privacy
            policy.
          </p>
        </GridContainer>
      </FormContainer>
    </LightSignUpContainer>
  );
};
