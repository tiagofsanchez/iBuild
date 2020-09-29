/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

import { frameworksToArray } from "../utils/helpers";

import { LandingPageLayout } from "../components/layout";
import Cta from "../components/homePage/cta";
import Impact from "../components/homePage/impact";
import Vector from "../svgs/vector.svg";
import FrameworkCardList from "../components/shared/frameworkCardList";
import { NewsletterForm } from "../components/newsletterForm";

const Container = styled.div`
  display: grid;
  grid-gap: 200px;
  margin-bottom: 100px;
`;

const Section = styled.div`
  position: relative;
`;
const VectorContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -10;
`;

const Index = ({ data }) => {
  const { allStrapiFrameworks } = data;
  const allFrameworks = frameworksToArray(allStrapiFrameworks.edges);

  return (
    <LandingPageLayout>
      <section sx={{ variant: `layout.main`, mb: `200px` }}>
        <Cta />
      </section>
      <Container>
        <section sx={{ variant: `layout.main` }}>
          <Impact />
        </section>
        <section>
          <Section sx={{ variant: `layout.main` }}>
            <h2 sx={{ color: `text`, mt: `0px` }}>Frameworks</h2>
            <p sx={{ variant: `text.tagline` }}>Our most popular</p>
          </Section>
          <div sx={{ variant: `layout.mainFrameworks` }}>
            <FrameworkCardList allFrameworks={allFrameworks} />
          </div>
          <VectorContainer>
            <Vector />
          </VectorContainer>
        </section>
        <section sx={{ variant: `layout.main` }}>
          <NewsletterForm />
        </section>
      </Container>
    </LandingPageLayout>
  );
};

export const query = graphql`
  {
    allStrapiFrameworks {
      edges {
        node {
          type {
            type
          }
          name
          teaser
          caption
        }
      }
    }
  }
`;

export default Index;
