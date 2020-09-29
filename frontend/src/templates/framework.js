/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";

import { frameworksToArray, LowerCaseString } from "../utils/helpers";

import { Layout } from "../components/layout";

import FrameworkCardList from "../components/shared/frameworkCardList";
import ProblemIcon from "../svgs/problemValidationBig.svg";
import SocialSharing from "../components/socialSharing";
import FooterSubscription from "../components/shared/footerSubscription"


const FrameworkHeader = styled.div`
  padding: 50px;
  backdrop-filter: blur(250px);
  box-shadow: 0px 5px 5px rgba(57, 19, 184, 0.07);
  @media (max-width: 650px) {
    text-alignment: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;
  @media (max-width: 690px) {
    grid-template-columns: auto;
    justify-items: center;
  }
`;


const Framework = ({ pageContext, data }) => {
  const framework = pageContext.name;
  const { strapiFrameworks, discovering, building, scaling } = data;

  const frameworkType = LowerCaseString(strapiFrameworks.type.type);

  let allFrameworks = [];
  if (frameworkType === "discovering") {
    allFrameworks = frameworksToArray(
      discovering.edges.filter(
        (fram) => fram.node.name !== strapiFrameworks.name
      )
    );
  } else if (frameworkType === `building`) {
    allFrameworks = frameworksToArray(
      building.edges.filter((fram) => fram.node.name !== strapiFrameworks.name)
    );
  } else {
    allFrameworks = frameworksToArray(
      scaling.edges.filter((fram) => fram.node.name !== strapiFrameworks.name)
    );
  }

  return (
    <Layout withHero={true}>
      <FrameworkHeader
        sx={{
          variant: `layout.frameworkName`,
          bg: `backgroundHeader`,
          borderRadius: 15,
        }}
      >
        <Grid>
          <ProblemIcon />
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
  query MyQuery($name: String!) {
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
    }
    discovering: allStrapiFrameworks(
      filter: { type: { type: { eq: "Discovering" } } }
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
        }
      }
    }
    building: allStrapiFrameworks(
      filter: { type: { type: { eq: "Building" } } }
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
        }
      }
    }
    scaling: allStrapiFrameworks(
      filter: { type: { type: { eq: "Scaling" } } }
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
        }
      }
    }
  }
`;

export default Framework;
