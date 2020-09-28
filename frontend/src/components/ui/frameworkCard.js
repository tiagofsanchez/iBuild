/** @jsx jsx */
import { jsx, Card, Box } from "theme-ui";

import ProblemValidationBig from "../../svgs/problemValidationBig.svg";

const FrameworkCard = ({ name, teaser, caption }) => {
  return (
    <Card>
      <Box sx={{ variant: `cards.header` }}>
        <Box sx={{ width: `252px`, textAlign: `center` }}>
          <ProblemValidationBig />
          <h4 sx={{ m: `0px`, color: `text` }}>{name}</h4>
        </Box>
      </Box>
      <Box sx={{ variant: `cards.description` }}>
        <p sx={{ m: `0px` }}>{teaser}</p>
        <p sx={{ variant: `text.tagline`, mt: `0px` }}>{caption}</p>
      </Box>
    </Card>
  );
};

export default FrameworkCard;
