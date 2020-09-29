/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import FrameworkCard from "../ui/frameworkCard";

const _ = require("lodash");

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fill , minmax(350px ,350px));
  grid-gap: 20px;
  justify-items: center;
  @media (max-width: 820px) { 
    grid-template-columns: auto;
  }
`;

const FrameworkCardList = ({ allFrameworks }) => {
  const { frameworkPath } = useSiteMetadata();

  return (
    <Container>
      {allFrameworks.map((framework) => {
        const url = `${frameworkPath}/${_.kebabCase(framework.name)}` 
        return (
          <FrameworkCard
            {...framework}
            url={url}
            key={framework.name}
          />
        );
      })}
    </Container>
  );
};

export default FrameworkCardList;
