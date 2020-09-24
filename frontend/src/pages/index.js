/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import useImages from "../hooks/useImages";
import { LandingPageLayout } from "../components/layout";
import Cta from "../components/homePage/cta";
import Impact from '../components/homePage/impact';
import FrameworkCardList from "../components/shared/frameworkCardList";
import { NewsletterForm } from "../components/newsletterForm";

const _ = require("lodash");

const Container = styled.div`
  display: grid;
  grid-gap: 100px;
  margin-bottom: 100px;
`;

const Index = ({ data }) => {
  const { imgHero } = useImages();
  const { allStrapiTypeOfFrameworks, site } = data;
  const frameworkPath = site.siteMetadata.frameworkPath;

  console.log(imgHero);

  return (
    <LandingPageLayout>
      <Container>
        <section sx={{ variant: `layout.main` }}>
          <Cta />
        </section>
        <section sx={{ variant: `layout.main` }}>
          <Impact />
        </section>
        <section sx={{ variant: `layout.main` }}>
          <FrameworkCardList />
        </section>
        <section sx={{ variant: `layout.main` }}>
          <h1>List of the Frameworks in Strapi</h1>
          <p sx={{ variant: `text.caption`, mt: `0` }}>
            Strapi is the CMS that I am using for the project
          </p>
          {allStrapiTypeOfFrameworks.edges.map((node) => {
            return (
              <div key={node.node.type}>
                <h4>{node.node.type}</h4>
                {node.node.frameworks.map((fram, index) => (
                  <Link
                    to={`${frameworkPath}/${_.kebabCase(fram.name)}`}
                    key={index}
                  >
                    <p>{fram.name}</p>
                  </Link>
                ))}
              </div>
            );
          })}
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
