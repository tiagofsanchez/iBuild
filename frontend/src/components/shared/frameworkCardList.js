/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import FrameworkCard from "../ui/frameworkCard";

const _ = require("lodash");

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  justify-items: center;
  @media (max-width: 880px) {
    grid-template-columns: auto;
    grid-gap: 40px;
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
