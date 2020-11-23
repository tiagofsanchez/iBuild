/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Img from "gatsby-image";

import useImages from "../../hooks/useImages";
import DownloadButton from "./downloadButton";

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
          Download all our slides
        </p>
        <h2 sx={{ mt: `0px`, mb: 4, color: `text` }}>
          All you need to make an impact
        </h2>
        <DownloadButton />
      </div>
    </Container>
  );
};

export default Impact;
