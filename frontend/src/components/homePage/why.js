/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import styled from "@emotion/styled";

import { RiSlideshowLine } from "react-icons/ri";
import { GiPunchBlast } from "react-icons/gi";
import { GiSteampunkGoggles } from "react-icons/gi";

const WhyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-gap: 50px;
  }
`;

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
`;

const Why = () => {
  return (
    <div>
      <div sx={{ textAlign: `center`, mb: 4 }}>
        <p
          sx={{
            variant: `text.tagline`,
            fontWeight: `600`,
            color: `primary`,
            my: 0,
          }}
        >
          WHY FRAMSUP?
        </p>
        <h3 sx={{ color: `text`, mt: 0 }}>All the frameworks you wish for</h3>
      </div>
      <WhyContainer>
        <WhyGrid>
          <RiSlideshowLine
            size={50}
            sx={{ color: `text2`, bg: `primary`, p: 1, borderRadius: `4px` }}
          />
          <div>
            <h5 sx={{ m: 0 }}>Pretty slides</h5>
            <p sx={{ my: 1, variant: `text.tagline` }}>
              Don't spend time building slides, use this ones completely for free.
            </p>
          </div>
        </WhyGrid>
        <WhyGrid>
          <GiPunchBlast
            size={50}
            sx={{ color: `text2`, bg: `primary`, p: 1, borderRadius: `4px` }}
          />
          <div>
            <h5 sx={{ m: 0 }}>Build stuff</h5>
            <p sx={{ my: 1, variant: `text.tagline` }}>
              Frameworks that can be very helpful to develop your next solutions.
            </p>
          </div>
        </WhyGrid>
        <WhyGrid>
          <GiSteampunkGoggles
            size={50}
            sx={{ color: `text2`, bg: `primary`, p: 1, borderRadius: `4px` }}
          />
          <div>
            <h5 sx={{ m: 0 }}>Experiment</h5>
            <p sx={{ my: 1, variant: `text.tagline` }}>Build your in-house capabilities as you design new products and services.</p>
          </div>
        </WhyGrid>
      </WhyContainer>
    </div>
  );
};

export default Why;
