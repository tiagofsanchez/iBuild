/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import useImages from "../hooks/useImages";
import { LandingPageLayout } from "../components/layout";
import Cta from "../components/homePage/cta";
import Impact from '../components/homePage/impact';
import Vector from '../svgs/vector.svg';
import FrameworkCardList from "../components/shared/frameworkCardList";
import { NewsletterForm } from "../components/newsletterForm";

const _ = require("lodash");

const Container = styled.div`
  display: grid;
  grid-gap: 200px;
  margin-bottom: 100px;
`;

const Section = styled.section`
  position: relative; 
`
const VectorContainer = styled.div`
  position: absolute; 
  right: 0;
  top:0;
  z-index:-10;
`


const Index = ({ data }) => {
  const { imgHero } = useImages();
  const { allStrapiTypeOfFrameworks, site } = data;
  const frameworkPath = site.siteMetadata.frameworkPath;

  console.log(imgHero);

  return (
    <LandingPageLayout>
        <section sx={{ variant: `layout.main`, mb:`200px` }}>
          <Cta />
        </section>
        <Container>
        <section sx={{ variant: `layout.main` }}>
          <Impact />
        </section>
        <Section sx={{ variant: `layout.main` }}>
          <h2 sx={{color:`text`, mt:`0px`}}>Frameworks</h2>
          <p sx={{variant: `text.tagline`}}>Our most popular</p>
          <FrameworkCardList />
          <VectorContainer>
          <Vector />
          </VectorContainer>
        </Section>
        <section sx={{ variant: `layout.main` }}>
          <NewsletterForm />
        </section>
      </Container>
    </LandingPageLayout>
  );
};

export const query = graphql`
  {
    allStrapiTypeOfFrameworks {
      edges {
        node {
          type
          frameworks {
            name
            description
          }
        }
      }
    }
    site {
      siteMetadata {
        frameworkPath
      }
    }
  }
`;

export default Index;
