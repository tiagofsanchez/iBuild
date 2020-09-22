/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { graphql, Link } from "gatsby";

import { Layout } from "../components/layout";
import Menu from "../components/menu";
import FrameworkCard from "../components/ui/frameworkCard";
import { NewsletterForm } from "../components/newsletterForm";

const _ = require("lodash");

const Index = ({ data }) => {
  const { allStrapiTypeOfFrameworks, site } = data;
  const frameworkPath = site.siteMetadata.frameworkPath;

  return (
    <Layout withHero={true}>
      <section sx={{ variant: `layout.main` }}>
        <h1>Should be the Home Page</h1>
        <h1>All components will be here till I set up story book</h1>
        <hr />
        <h1>Menu</h1>
        <Box sx={{ bg: `naturalDark` }}>
          <Menu />
        </Box>
        <hr />
        <h1>Typography H1</h1>
        <h2>This is H2</h2>
        <h3>This is H3</h3>
        <h4>This is H4</h4>
        <p>This is the normal paragraph</p>
        <p sx={{ variant: `text.tagline` }}>This is a tagline</p>
        <p sx={{ variant: `text.caption` }}>This is a caption</p>
        <hr />
        <h1>Cards</h1>
        <p>Primary</p>
        <FrameworkCard />
        <p sx={{ variant: `text.caption` }}>
          Responsive for desktop and mobile
        </p>
        <hr />
        <h1>Newsletter form</h1>
        <NewsletterForm />
        <p sx={{ variant: `text.caption` }}>
          Responsive for desktop and mobile
        </p>
        <hr />
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
    </Layout>
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
