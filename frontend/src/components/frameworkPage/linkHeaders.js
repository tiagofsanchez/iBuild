/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const LinksContainer = styled.div`
display: grid;
grid-template-columns: auto; 
grid-gap: 5px;
`

const LinkHeaders = ({ strapiFrameworks }) => {
  const slide = strapiFrameworks.frameworkSlide;
  return (
    <LinksContainer sx={{ variant: `layout.frameworkMain` }}>
      <a href="#who-could-use-this">Who could use this</a>
      <a href="#framework-explanation">Framework explanation</a>
      {slide && <a href="#slide">Slide</a>}
    </LinksContainer>
  );
};

LinkHeaders.propTypes = {
  strapiFrameworks: PropTypes.object.isRequired,
};

export default LinkHeaders;
