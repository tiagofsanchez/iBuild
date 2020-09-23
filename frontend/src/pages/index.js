/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { graphql, Link } from "gatsby";

import { LandingPageLayout } from "../components/layout";
import Menu from "../components/menu";
import FrameworkCardList from "../components/shared/frameworkCardList";
import { NewsletterForm } from "../components/newsletterForm";

const _ = require("lodash");

const Index = ({ data }) => {
  const { allStrapiTypeOfFrameworks, site } = data;
  const frameworkPath = site.siteMetadata.frameworkPath;

  return (
    <LandingPageLayout >
      <section sx={{ variant: `layout.main` }}>
      <FrameworkCardList />
      </section>
      <section sx={{variant: `layout.main`}}>
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
