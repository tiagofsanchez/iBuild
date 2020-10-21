/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import { useState } from "react";
import styled from "@emotion/styled";

import FrameworkCardList from "../shared/frameworkCardList";

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 90px));
  grid-gap: 10px;
`;

const FrameworkSample = ({ allFrameworks }) => {
  const [frameType, setFramType] = useState("Discovering");

  const toogleFrameworkHandler = (e) => {
    setFramType(e.target.name);
  };

  const styling = {
    bg: `linear-gradient(209.68deg, rgb(64, 201, 255) 20.41%, rgb(232, 28, 255) 94.89%)`,
    color: `text2`,
  };

  let dButton = {};
  let bButton = {};

  if (frameType === "Discovering") {
    dButton = styling;
  } else {
    bButton = styling;
  }

  let selectedFrameworks = allFrameworks;
  selectedFrameworks = allFrameworks
    .filter((framework) => framework.type === frameType)
    .slice(0, 6);

  return (
    <div>
      <div sx={{ variant: `layout.main`, py: `0px` }}>
        <p sx={{ variant: `text.tagline`, my: `0px` }}>
          Check out some framework examples
        </p>
        <h2 sx={{ color: `text`, mt: `0px` }}>Frameworks</h2>
      </div>
      <ButtonsContainer sx={{ variant: `layout.main`, pt: `0px` }}>
        <Button
          name="Discovering"
          aria-label="Discovering frameworks"
          sx={{
            variant: `buttons.secondary`,
            backgroundImage: dButton.bg,
            color: dButton.color,
          }}
          onClick={toogleFrameworkHandler}
        >
          discover
        </Button>
        <Button
          name="Building"
          aria-label="Building frameworks"
          sx={{
            variant: `buttons.secondary`,
            backgroundImage: bButton.bg,
            color: bButton.color,
          }}
          onClick={toogleFrameworkHandler}
        >
          build
        </Button>
      </ButtonsContainer>
      <div sx={{ variant: `layout.mainFrameworks` }}>
        <FrameworkCardList allFrameworks={selectedFrameworks} />
      </div>
    </div>
  );
};

export default FrameworkSample;
