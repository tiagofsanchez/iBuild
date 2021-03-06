/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

import { frameworksToArray } from "../utils/helpers";

import { LandingPageLayout } from "../components/shared/layout";
import FrameworkCardList from "../components/shared/frameworkCardList";
import FooterSubscription from "../components/shared/footerSubscription";
import SEO from "../components/shared/seo";

const PageContainer = styled.div`
  display: grid;
  grid-gap: 200px;
`;

const Frameworks = ({ data }) => {
  const allFrameworks = frameworksToArray(data.allStrapiFrameworks.edges);

  return (
    <LandingPageLayout>
      <SEO />
      <PageContainer>
        <section sx={{ variant: `layout.searchMain`, mb: 6 }}>
          <FrameworkCardList allFrameworks={allFrameworks} />
        </section>
      </PageContainer>
      <FooterSubscription />
    </LandingPageLayout>
  );
};

export const search = graphql`
  query MySearch {
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

export default Frameworks;
