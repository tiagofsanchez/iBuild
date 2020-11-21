/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import { useState } from "react";

import useSiteMetadata from "../hooks/useSiteMetadata";
import { urlPath } from "../utils/helpers";

import { Layout } from "../components/shared/layout";
import FooterSubscription from "../components/shared/footerSubscription";
import SEO from "../components/shared/seo";
import Header from "../components/frameworkPage/header";
import FrameworkContent from "../components/frameworkPage/frameworkContent";
import FrameworkSharing from "../components/frameworkPage/frameworkSharing";
import OtherFrameworks from "../components/frameworkPage/otherFrameworks";

const Framework = ({ data }) => {
  const [isEmbedded, setIsEmbedded] = useState(false);

  const { frameworkPath, appPath, siteUrl } = useSiteMetadata();
  const { strapiFrameworks, otherFrameworks } = data;

  const embeddedHandler = () => {
    setIsEmbedded(!isEmbedded);
  };

  const { url } = urlPath(
    frameworkPath,
    appPath,
    siteUrl,
    strapiFrameworks.name
  );

  const embeddedFrame = `<iframe src="${url} name="iframe_a" height="900px" width="100%" title="${strapiFrameworks.name}"></iframe>`;

  return (
    <Layout withHero={true}>
      <SEO
        title={strapiFrameworks.name}
        description={strapiFrameworks.description}
        image={strapiFrameworks.icon.publicURL}
      />
      <Header strapiFrameworks={strapiFrameworks} />
      <FrameworkContent strapiFrameworks={strapiFrameworks} />
      <FrameworkSharing
        embeddedHandler={embeddedHandler}
        embeddedFrame={embeddedFrame}
        isEmbedded={isEmbedded}
      />
      <OtherFrameworks otherFrameworks={otherFrameworks.edges} />
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
      frameworkSlide {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
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
