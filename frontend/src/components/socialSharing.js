/** @jsx jsx */
import { jsx, IconButton } from "theme-ui";
import styled from "@emotion/styled";

import LinkIcon from "../svgs/linkIcon.svg";
import LinkedInIcon from "../svgs/linkedInIcon.svg";
import TwitterIcon from "../svgs/twitterIcon.svg";
import FbIcon from "../svgs/fbIcon.svg";

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 44px);
  grid-gap: 5px;
  justify-items: start;
  align-items: center;
`;

const SocialSharing = () => {
  return (
    <SocialContainer>
      <IconButton sx={{ bg: `primary`, variant: `buttons.share` }}>
        <FbIcon />
      </IconButton>
      <IconButton sx={{ bg: `primary`, variant: `buttons.share` }}>
        <LinkedInIcon />
      </IconButton>
      <IconButton sx={{ bg: `primary`, variant: `buttons.share` }}>
        <TwitterIcon />
      </IconButton>

      <IconButton sx={{ bg: `primary`, variant: `buttons.share` }}>
        <LinkIcon />
      </IconButton>
    </SocialContainer>
  );
};

export default SocialSharing;
