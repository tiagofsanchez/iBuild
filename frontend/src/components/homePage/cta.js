/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Img from "gatsby-image";

import useImages from "../../hooks/useImages";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  grid-gap: 20px;
  @media (max-width: 1050px) {
    grid-template-columns: auto;
  }
`;

const TextContainer = styled.div`
  display: grip;
  @media (max-width: 1050px) {
    text-align: center;
  }
`;

const Cta = () => {
  const { imgHero } = useImages();

  return (
    <Container>
      <TextContainer>
        <h1
          sx={{
            color: `text2`,
            textShadow: `0px 10px 20px rgba(0, 0, 0, 0.25)`,
          }}
        >
          Engaging with Startups
        </h1>
        <p sx={{ color: `text2` }}>
          Don’t just try to make an impact. Do it with the right tools. Get the
          right taxonomy. Drive change in your organization.
        </p>
      </TextContainer>
      <div sx={{ width: `auto` }}>
        <Img fluid={imgHero} />
      </div>
    </Container>
  );
};

export default Cta;
