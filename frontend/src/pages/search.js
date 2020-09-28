/** @jsx jsx */
import { jsx, Input, Button } from "theme-ui";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

import { frameworksToArray } from '../utils/helpers'

import { Layout } from "../components/layout";
import FrameworkCardList from "../components/shared/frameworkCardList";

const PageContainer = styled.div`
  display: grid;
  grid-gap: 200px;
`;

const SearchBarContainer = styled.section`
  padding: 50px;
  box-shadow: 0px 5px 5px rgba(57, 19, 184, 0.07);
  @media (max-width: 650px) {
    padding: 10px 10px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const Search = ({ data }) => {
  const allFrameworks = frameworksToArray(data.allStrapiFrameworks.edges)

  return (
    <Layout withHero={true}>
      <PageContainer>
        <SearchBarContainer
          sx={{
            variant: `layout.searchBar`,
            bg: `backgroundHeader`,
            borderRadius: 15,
          }}
        >
          <GridContainer>
            <Input />
            <Button>Search</Button>
          </GridContainer>
        </SearchBarContainer>
        <section sx={{ variant: `layout.searchMain`, mb: `200px ` }}>
          <FrameworkCardList allFrameworks={allFrameworks} />
        </section>
      </PageContainer>
    </Layout>
  );
};

export const search = graphql`
  query MySearch {
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

export default Search;
