/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import PcBig from "../../svgs/pcBig.svg";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  @media (max-width: 1050px) {
    grid-template-columns: auto;
  }
`;

const TextContainer = styled.div`
  display: grip;
`;

const Cta = () => {
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

      <PcBig />
    </Container>
  );
};

export default Cta;
