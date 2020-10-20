/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import { useState } from "react";
import styled from "@emotion/styled";

import FrameworkCardList from "../shared/frameworkCardList";

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 120px);
  grid-gap: 15px;
`;

const FrameworkSample = ({ allFrameworks }) => {
  console.log(allFrameworks);

  return (
    <div>
      <div sx={{ variant: `layout.main`, py: `0px` }}>
        <h2 sx={{ color: `text`, mt: `0px` }}>Frameworks</h2>
        <p sx={{ variant: `text.tagline` }}>Our most popular</p>
      </div>
      <ButtonsContainer sx={{ variant: `layout.main`, pt: `0px` }}>
        <Button
          name="Discovering"
          sx={{ variant: `buttons.secondary` }}
          autoFocus
        >
          discovery
        </Button>
        <Button name="Building" sx={{ variant: `buttons.secondary` }}>
          {" "}
          build
        </Button>
        <Button name="Scaling" sx={{ variant: `buttons.secondary` }}>
          scale
        </Button>
      </ButtonsContainer>
      <div sx={{ variant: `layout.mainFrameworks` }}>
        <FrameworkCardList allFrameworks={allFrameworks} />
      </div>
    </div>
  );
};

export default FrameworkSample;
