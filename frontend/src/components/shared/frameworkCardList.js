/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import FrameworkCard from "./frameworkCard";
import { urlPath } from "../../utils/helpers";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
  grid-gap: 20px;
  justify-content: center;
  justify-items: center;
  @media (max-width: 820px) {
    grid-template-columns: auto;
  }
`;

const FrameworkCardList = ({ allFrameworks }) => {
  const { frameworkPath, appPath, siteUrl } = useSiteMetadata();

  return (
    <Container>
      {allFrameworks.map((framework) => {
        const { slug } = urlPath(
          frameworkPath,
          appPath,
          siteUrl,
          framework.name
        );
        return <FrameworkCard {...framework} url={slug} key={framework.name} />;
      })}
    </Container>
  );
};

export default FrameworkCardList;
