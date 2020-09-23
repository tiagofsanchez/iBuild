/** @jsx jsx */
import { jsx, IconButton } from "theme-ui";
import styled from "@emotion/styled";
import copy from "copy-to-clipboard";
import { useState } from "react";

import LinkIcon from "../svgs/linkIcon.svg";
import LinkedInIcon from "../svgs/linkedInIcon.svg";
import FbIcon from "../svgs/fbIcon.svg";

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 44px) auto;
  grid-gap: 5px;
  justify-items: start;
  align-items: center;
`;

const SocialSharing = () => {
  const [isCopied, setIsCopied] = useState(false);
  const url = window.location.href;

  const handleCopyLink = () => {
    copy(url);
    setIsCopied(!isCopied);
    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  };

  return (
    <SocialContainer>
      <IconButton
        sx={{ bg: `primary`, variant: `buttons.share` }}
        alt="Share on Facebook"
      >
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
          <FbIcon />
        </a>
      </IconButton>
      <IconButton
        sx={{ bg: `primary`, variant: `buttons.share` }}
        alt="Share on LinkedIn"
      >
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>
          <LinkedInIcon />
        </a>
      </IconButton>

      <IconButton
        sx={{ bg: `primary`, variant: `buttons.share` }}
        alt="Copy link "
        onClick={handleCopyLink}
      >
        <LinkIcon />
      </IconButton>
      {isCopied && <p sx={{ color: `primary2`, my: "0px" }}>Link copied</p>}
    </SocialContainer>
  );
};

export default SocialSharing;
