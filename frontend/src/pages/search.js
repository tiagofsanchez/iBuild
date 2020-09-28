/** @jsx jsx */
import { jsx, Input, Button, Radio, Label } from "theme-ui";
import { graphql } from 'gatsby'
import styled from "@emotion/styled";

import { Layout } from "../components/layout";

const SearchBarContainer = styled.section`
  padding: 50px;
  box-shadow: 0px 5px 5px rgba(57, 19, 184, 0.07);
  @media (max-width: 650px) {
    padding:10px 10px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const Search = () => (
  <Layout withHero={true}>
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
  </Layout>
);

export default Search;
