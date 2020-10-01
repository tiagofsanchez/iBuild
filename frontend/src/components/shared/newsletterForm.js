/** @jsx jsx */
import { jsx, Box, Input, Button } from "theme-ui";
import styled from "@emotion/styled";
import Img from "gatsby-image";

import useImage from "../../hooks/useImages";
import useFormInput from "../../hooks/useFormInput";
import { addEmailToConvertKit } from "../../utils/apis";

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
  const { imgHero } = useImage();
  const name = useFormInput("");
  const email = useFormInput("");

  const onFormSubmithandler = (e) => {
    e.preventDefault();
    addEmailToConvertKit(name.value, email.value);
  };

  let disabled = true;
  if (name.value !== "" && email.value !== "") {
    disabled = false;
  }

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
          <FormContainer onSubmit={onFormSubmithandler}>
            <GridContainer>
              <Input placeholder="Your name" type="text" {...name} />
              <Input placeholder="Your email" type="email" {...email} />
            </GridContainer>
            <GridContainer>
              <Button
                disabled={disabled}
                sx={
                  disabled && {
                    bg: `backgroundHeader`,
                    border: `2px solid`,
                    color: `primary`,
                  }
                }
              >
                Sign up
              </Button>
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
  const name = useFormInput("");
  const email = useFormInput("");

  let disabled = true;
  if (name.value !== "" && email.value !== "") {
    disabled = false;
  }

  return (
    <LightSignUpContainer>
      <h4 sx={{ mt: `0px`, color: `text` }}>Our newsletter</h4>
      <p>
        Finally a place where you can access everything about innovation.Unlock
        the jargon and get clarity.
      </p>
      <FormContainer>
        <GridContainer>
          <Input placeholder="Your name" type="text" {...name} />
          <Input placeholder="Your email" type="email" {...email} />
        </GridContainer>
        <GridContainer>
          <Button
            disabled={disabled}
            sx={
              disabled && {
                bg: `backgroundHeader`,
                border: `2px solid`,
                color: `primary`,
              }
            }
          >
            Sign up
          </Button>
          <p sx={{ variant: `text.tagline`, m: `0px` }}>
            By clicking on Sing up you agree to our Terms of service and privacy
            policy.
          </p>
        </GridContainer>
      </FormContainer>
    </LightSignUpContainer>
  );
};
