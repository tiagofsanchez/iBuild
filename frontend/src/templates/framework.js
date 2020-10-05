/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

import { frameworksToArray } from "../utils/helpers";

import { Layout } from "../components/shared/layout";
import FrameworkCardList from "../components/shared/frameworkCardList";
import SocialSharing from "../components/shared/socialSharing";
import FooterSubscription from "../components/shared/footerSubscription";
import SEO from "../components/shared/seo";

const FrameworkHeader = styled.div`
  padding: 50px;
  backdrop-filter: blur(250px);
  box-shadow: 0px 5px 5px rgba(57, 19, 184, 0.07);
  margin: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 
  grid-gap: 20px;
  justify-items: center; 
  text-align: center; 
  margin: auto;
 
`;

const Framework = ({ pageContext, data }) => {
  const framework = pageContext.name;
  const { strapiFrameworks, otherFrameworks } = data;
  const allFrameworks = frameworksToArray(otherFrameworks.edges);

  return (
    <Layout withHero={true}>
      <SEO
        title={strapiFrameworks.name}
        description={strapiFrameworks.description}
        image={strapiFrameworks.icon.publicURL}
      />
      <FrameworkHeader
        sx={{
          variant: `layout.frameworkName`,
          bg: `backgroundHeader`,
          borderRadius: 15,
        }}
      >
        <Grid>
          <div sx={{ width: `120px`, p: 1 }}>
            <Img fluid={strapiFrameworks.icon.childImageSharp.fluid} />
          </div>
          <h1 sx={{ color: `naturalDark` }}>{framework}</h1>
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
      <section sx={{ variant: `layout.frameworkMain`, pt: `0px` }}>
        <SocialSharing />
      </section>
      <section sx={{ variant: `layout.frameworkOthers`, mb: 6 }}>
        <h1 sx={{ textAlign: `center`, my: 4, color: `text` }}>
          Other useful tools
        </h1>
        <FrameworkCardList allFrameworks={allFrameworks} />
      </section>
      <FooterSubscription />
    </Layout>
  );
};

export const framework = graphql`
  query MyQuery($name: String!, $type: String!) {
    strapiFrameworks(name: { eq: $name }) {
      name
      teaser
      caption
      description
      whoToUse
      theFramework
      type {
        type
      }
      icon {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        publicURL
      }
    }
    otherFrameworks: allStrapiFrameworks(
      filter: { name: { ne: $name }, type: { type: { eq: $type } } }
      limit: 3
    ) {
      edges {
        node {
          name
          teaser
          caption
          type {
            type
          }
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

export default Framework;
