/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";

import Layout from "../components/layout";
import HeroFooter from "../components/ui/heroFooter";
import About from "../components/aboutFooter";
import FrameworkCard from "../components/ui/frameworkCard";
import ProblemIcon from "../svgs/problemValidationBig.svg";
import SocialSharing from "../components/socialSharing";
import { LightNewsletterForm } from "../components/newsletterForm";

const FrameworkHeader = styled.div`
  padding: 50px;
  backdrop-filter: blur(250px);
  box-shadow: 0px 5px 5px rgba(57, 19, 184, 0.07);
  @media (max-width: 650px) {
    text-alignment: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;
  @media (max-width: 690px) {
    grid-template-columns: auto;
    justify-items: center;
  }
`;

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

const OtherFrameworksContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  justify-items: center;
  @media (max-width: 880px) {
    grid-template-columns: auto;
    grid-gap: 40px;
  }
`;

const Framework = ({ pageContext, data }) => {
  const framework = pageContext.name;
  const { strapiFrameworks } = data;

  return (
    <Layout withHero={true}>
      <FrameworkHeader
        sx={{
          variant: `layout.frameworkName`,
          bg: `backgroundHeader`,
          borderRadius: 15,
        }}
      >
        <Grid>
          <ProblemIcon />
          <h1 sx={{color: `primary2`}}>{framework}</h1>
        </Grid>
        <h4 sx={{ color: `text` }}>{strapiFrameworks.teaser}</h4>
        <h4 sx={{ color: `text`, fontWeight: `soft`, mt: 3 }}>
          {strapiFrameworks.caption}
        </h4>
      </FrameworkHeader>
      <section sx={{ variant: `layout.frameworkMain` }}>
        <ReactMarkdown source={strapiFrameworks.description} />
        <h3>Who could use this</h3>
        <ReactMarkdown source={strapiFrameworks.whoToUse} />
        <h3>Framework explanation</h3>
        <ReactMarkdown source={strapiFrameworks.theFramework} />
      </section>
      <section sx={{ variant: `layout.frameworkMain` , pt: `0px`}}>
        <SocialSharing />
      </section>
      <section sx={{ variant: `layout.frameworkOthers`, mb: 6 }}>
        <h1 sx={{ textAlign: `center`, my: 4, color: `text` }}>
          Other useful tools
        </h1>
        <OtherFrameworksContainer>
          <FrameworkCard />
          <FrameworkCard />
          <FrameworkCard />
        </OtherFrameworksContainer>
      </section>
      <SignUpContainer sx={{ variant: `layout.frameworkFooter` }}>
        <LightNewsletterForm />
        <About />
      </SignUpContainer>
      <HeroFooter />
    </Layout>
  );
};

export const framework = graphql`
  query MyQuery($name: String!) {
    strapiFrameworks(name: { eq: $name }) {
      name
      teaser
      caption
      description
      whoToUse
      theFramework
    }
  }
`;

export default Framework;
