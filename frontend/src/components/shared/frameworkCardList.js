/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import FrameworkCard from "./frameworkCard";

const _ = require("lodash");

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
  grid-gap: 20px;
  justify-content: center;
  @media (max-width: 820px) {
    grid-template-columns: auto;
  }
`;

const FrameworkCardList = ({ allFrameworks }) => {
  const { frameworkPath, appPath } = useSiteMetadata();

  return (
    <Container>
      {allFrameworks.map((framework) => {
        const url = `${appPath}${frameworkPath}/${_.kebabCase(framework.name)}`;
        return <FrameworkCard {...framework} url={url} key={framework.name} />;
      })}
    </Container>
  );
};

export default FrameworkCardList;
