/** @jsx jsx */
import { jsx, IconButton, Close, Button } from "theme-ui";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import copy from "copy-to-clipboard";
import { useState } from "react";

import SocialSharing from "../shared/socialSharing";

const SharingContainer = styled.section`
display: grid;
grid-gap: 35px;
`;

const SharingButtons = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const EmbedContainer = styled.div`
  border: 2px solid;
  display: grid;
  justify-items: end;
  padding: 8px;
  background: linear-gradient(209.68deg, #40C9FF 20.41%, #E81CFF 94.89%);
`;

const Pre = styled.pre`
  padding: 15px;
  white-space: pre-wrap;
  word-break: break-word;
  color: white;
`;

const FrameworkSharing = ({ embeddedHandler, embeddedFrame, isEmbedded }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmbeddedHandler = () => {
    copy(embeddedFrame);
    setIsCopied(!isCopied);
    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  };

  return (
    <SharingContainer sx={{ variant: `layout.frameworkMain`, pt: `0px` }}>
      <SharingButtons>
        <SocialSharing />
        <IconButton
          sx={{ variant: `buttons.share`, bg: `primary`, width: `auto` }}
          onClick={embeddedHandler}
        >
          <p sx={{ color: `text2` }}>Embed</p>
        </IconButton>
      </SharingButtons>
      {isEmbedded && (
        <EmbedContainer>
          <Close onClick={embeddedHandler} sx={{ color: `naturalDark` }} />
          <Pre sx={{ bg: `naturalDark` }}>{embeddedFrame}</Pre>
          <Button
            onClick={copyEmbeddedHandler}
            sx={{ bg: `naturalDark`, border: `none`, float: `right` }}
          >
            Copy embed code
          </Button>
          {isCopied && (
            <p sx={{ color: `primary2`, mb: `0px` }}>Embed code copied</p>
          )}
        </EmbedContainer>
      )}
    </SharingContainer>
  );
};

FrameworkSharing.propTypes = {
  embeddedHandler: PropTypes.func.isRequired,
  embeddedFrame: PropTypes.string.isRequired,
  isEmbedded: PropTypes.bool.isRequired,
};

export default FrameworkSharing;
