/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media(max-width: 900px) { 
    grid-template-columns: auto;
    grid-gap: 5px;
  }
`;

const Impact = () => {
  return (
    <Container>
      <h2 sx={{my:`0px`}}>Learn all you need to make and impact</h2 >
      <p>
        The Innovation space if full of difficult words, terminologies and fancy
        frameworks. Here you will find everything that you need to know.
      </p>
    </Container>
  );
};

export default Impact;
