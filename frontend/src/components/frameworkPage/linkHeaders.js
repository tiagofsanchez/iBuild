/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 194px);
  justify-content: center;
  grid-gap: 5px;
  text-align: center;
`;

const LinkHeaders = ({ strapiFrameworks }) => {
  const slide = strapiFrameworks.frameworkSlide;
  return (
    <LinksContainer >
      <a sx={{ variant: `links.secondary` }} href="#who-could-use-this">
        Who could use this
      </a>
      <a sx={{ variant: `links.secondary` }} href="#framework-explanation">
        Framework explanation
      </a>
      {slide && (
        <a sx={{ variant: `links.secondary` }} href="#slide">
          Slide
        </a>
      )}
    </LinksContainer>
  );
};

LinkHeaders.propTypes = {
  strapiFrameworks: PropTypes.object.isRequired,
};

export default LinkHeaders;
