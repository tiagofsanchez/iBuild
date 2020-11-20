/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const LinksContainer = styled.div`
display: grid;
grid-template-columns: auto; 
grid-gap: 5px;
scroll-behavior: smooth;
`

const ALink = styled.a`
scroll-behavior: smooth;
` 

const LinkHeaders = ({ strapiFrameworks }) => {
  const slide = strapiFrameworks.frameworkSlide;
  return (
    <LinksContainer sx={{ variant: `layout.frameworkMain` }}>
      <ALink href="#who-could-use-this">Who could use this</ALink>
      <ALink href="#framework-explanation">Framework explanation</ALink>
      {slide && <ALink href="#slide">Slide</ALink>}
    </LinksContainer>
  );
};

LinkHeaders.propTypes = {
  strapiFrameworks: PropTypes.object.isRequired,
};

export default LinkHeaders;
