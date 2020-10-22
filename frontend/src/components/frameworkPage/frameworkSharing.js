/** @jsx jsx */
import { jsx, IconButton, Close, Button } from "theme-ui";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import copy from "copy-to-clipboard";

import SocialSharing from "../shared/socialSharing";

const SharingSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const EmbedContainer = styled.section`
  border: 2px solid;
  padding: 8px;
  margin-top: 20px;
  background: white;
`;

const Pre = styled.pre`
  padding: 15px;
  white-space: pre-wrap;
  word-break: break-word;
  color: white;
`;

const FrameworkSharing = ({ embeddedHandler, embeddedFrame, isEmbedded }) => {

  const copyHandler = () => {
    copy(embeddedFrame);
  };

  return (
    <SharingSection sx={{ variant: `layout.frameworkMain`, pt: `0px` }}>
      <SocialSharing />
      <IconButton
        sx={{ variant: `buttons.share`, bg: `primary`, width: `auto` }}
        onClick={embeddedHandler}
      >
        <p sx={{ color: `text2` }}>Embed</p>
      </IconButton>
      {isEmbedded && (
        <EmbedContainer>
          <Close
            onClick={embeddedHandler}
            sx={{ color: `naturalDark`, position: `right` }}
          />
          <Pre sx={{ bg: `naturalDark` }}>{embeddedFrame}</Pre>
          <Button
            onClick={copyHandler}
            sx={{ bg: `naturalDark`, border: `none`, float: `right` }}
          >
            Copy embed code
          </Button>
        </EmbedContainer>
      )}
    </SharingSection>
  );
};


FrameworkSharing.propTypes = {
  embeddedHandler: PropTypes.func.isRequired,
  embeddedFrame: PropTypes.string.isRequired,
  isEmbedded: PropTypes.bool.isRequired,
};

export default FrameworkSharing;
