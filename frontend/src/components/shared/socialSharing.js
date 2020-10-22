/** @jsx jsx */
import { jsx, IconButton } from "theme-ui";
import styled from "@emotion/styled";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { useLocation } from "@reach/router";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import LinkIcon from "../../svgs/linkIcon.svg";
import LinkedInIcon from "../../svgs/linkedInIcon.svg";
import FbIcon from "../../svgs/fbIcon.svg";

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 44px) auto;
  grid-gap: 5px;
  align-items: center;
`;

const SocialSharing = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { siteUrl } = useSiteMetadata();
  const { pathname } = useLocation();
  const url = `${siteUrl}${pathname}`;

  const handleCopyLink = () => {
    copy(url);
    setIsCopied(!isCopied);
    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  };

  return (
    <SocialContainer>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <IconButton
          sx={{ bg: `primary`, variant: `buttons.share` }}
          alt="Share on Facebook"
        >
          <FbIcon />
        </IconButton>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <IconButton
          sx={{ bg: `primary`, variant: `buttons.share` }}
          alt="Share on LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
      </a>
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
