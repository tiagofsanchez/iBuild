/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import { useState, useEffect } from "react";
import React from "react";

import useSiteMetadata from "../hooks/useSiteMetadata";
import { urlPath } from "../utils/helpers";

import { Layout } from "../components/shared/layout";
import FooterSubscription from "../components/shared/footerSubscription";
import SEO from "../components/shared/seo";
import Header from "../components/frameworkPage/header";
import FrameworkContent from "../components/frameworkPage/frameworkContent";
import FrameworkSharing from "../components/frameworkPage/frameworkSharing";
import OtherFrameworks from "../components/frameworkPage/otherFrameworks";
import Comments from "../components/shared/comments";
import { FaComment, FaCommentAlt } from "react-icons/fa";

const Framework = ({ data }) => {
  const [isEmbedded, setIsEmbedded] = useState(false);
  const { frameworkPath, appPath, siteUrl } = useSiteMetadata();
  const { strapiFrameworks, otherFrameworks } = data;
  const commentBox = React.createRef();

  useEffect(() => {
    const commentScript = document.createElement("script");
    commentScript.async = true;
    commentScript.src = "https://utteranc.es/client.js";
    commentScript.setAttribute("repo", "tiagofsanchez/iBuild-comments"); // PLEASE CHANGE THIS
    commentScript.setAttribute("issue-term", "pathname");
    commentScript.setAttribute("id", "utterances");
    commentScript.setAttribute("theme", "github-light");
    commentScript.setAttribute("crossorigin", "anonymous");
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
  }, [commentBox]);

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
      <section
        sx={{
          variant: `layout.frameworkMain`,
          my: 5,
          bg: `rgba(231,230,255,0.5)`,
          borderRadius: 10,
        }}
      >
        <div id="comments">
          <h3 sx={{ mt: 0 }}>
            {" "}
            <FaComment size={30} sx={{ color: `primary` }} /> Comments
          </h3>
          <Comments commentBox={commentBox} />
        </div>
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
