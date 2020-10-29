/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Img from "gatsby-image";

import useImages from "../../hooks/useImages";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "slide text";
  grid-gap: 50px;
  @media (max-width: 1050px) {
    grid-template-columns: auto;
    grid-template-areas:
      "text"
      "slide";
  }
`;

const Impact = () => {
  const { slides } = useImages();
  return (
    <Container>
      <div sx={{ gridArea: `slide` }}>
        <Img fluid={slides} />
      </div>
      <div sx={{ gridArea: `text` }}>
        <p sx={{ variant: `text.tagline`, my: `0px` }}>
          Download all our slides{" "}
          <span
            sx={{
              variant: `text.caption`,
              bg: `primary`,
              color: `text2`,
              p: 1,
              borderRadius: 2,
            }}
          >
            Coming soon
          </span>
        </p>
        <h2 sx={{ my: `0px`, color: `text` }}>
          All you need to make an impact
        </h2>
      </div>
    </Container>
  );
};

export default Impact;
