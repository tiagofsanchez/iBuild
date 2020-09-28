/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import FrameworkCard from "../ui/frameworkCard";

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
  return (
    <Container>
      {allFrameworks.map((framework) => (
        <FrameworkCard {...framework} key={framework.name}/>
      ))}
    </Container>
  );
};

export default FrameworkCardList;
