/** @jsx jsx */
import { jsx, IconButton, Close, Button } from "theme-ui";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import SocialSharing from "../shared/socialSharing";

const SharingSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Pre = styled.pre`
  padding: 15px;
  white-space: pre-wrap;
  word-break: break-word;
  color: white;
`;

const FrameworkSharing = ({ embeddedHandler, embeddedFrame, isEmbedded }) => {
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
        <div sx={{ mt: 4 }}>
          <Close onClick={embeddedHandler} sx={{ color: `naturalDark` }} />
          <Pre sx={{ bg: `naturalDark` }}>{embeddedFrame}</Pre>
          <Button sx={{ bg: `naturalDark`, border: `none` }}>
            Copy embed code
          </Button>
        </div>
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
