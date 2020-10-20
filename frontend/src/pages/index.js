/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

import { frameworksToArray } from "../utils/helpers";

import SEO from "../components/shared/seo";
import { LandingPageLayout } from "../components/shared/layout";
import Cta from "../components/homePage/cta";
import Impact from "../components/homePage/impact";
import Vector from "../svgs/vector.svg";
import Vector2 from "../svgs/vector2.svg";
import FrameworkSample from "../components/homePage/frameworkSample";
import { NewsletterForm } from "../components/shared/newsletterForm";

const Container = styled.div`
  display: grid;
  grid-gap: 200px;
  margin-bottom: 100px;
`;

const VectorContainer = styled.div`
  position: absolute;
  right: 0;
  top: 40%;
  z-index: -10;
`;

const Vector2Container = styled.div`
  position: absolute;
  left: 0;
  bottom: -10px;
  z-index: -10;
`;

const Index = ({ data }) => {
  const { allStrapiFrameworks } = data;
  const allFrameworks = frameworksToArray(allStrapiFrameworks.edges);
  
  return (
    <LandingPageLayout>
      <SEO />
      <section sx={{ variant: `layout.main`, mb: `200px` }}>
        <Cta />
      </section>
      <Container>
        <section sx={{ variant: `layout.main` }}>
          <Impact />
        </section>
        <section>
          <FrameworkSample allFrameworks={allFrameworks} />
          <VectorContainer>
            <Vector />
          </VectorContainer>
        </section>
        <section sx={{ variant: `layout.mainFrameworks` }}>
          <NewsletterForm />
        </section>
        <Vector2Container>
          <Vector2 />
        </Vector2Container>
      </Container>
    </LandingPageLayout>
  );
};

export const query = graphql`
  {
    allStrapiFrameworks(sort: { order: ASC, fields: name }) {
      edges {
        node {
          type {
            type
          }
          name
          teaser
          caption
          icon {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Index;
