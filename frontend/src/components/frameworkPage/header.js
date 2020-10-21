/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const FrameworkHeader = styled.div`
  padding: 50px;
  backdrop-filter: blur(250px);
  box-shadow: 0px 5px 5px rgba(57, 19, 184, 0.07);
  margin: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 
  grid-gap: 20px;
  justify-items: center; 
  text-align: center; 
  margin: auto;
`;

const Header = ({ strapiFrameworks }) => {
  
  return (
    <FrameworkHeader
      sx={{
        variant: `layout.frameworkName`,
        bg: `backgroundHeader`,
        borderRadius: 15,
      }}
    >
      <Grid>
        <div sx={{ width: `120px`, p: 1 }}>
          <Img fluid={strapiFrameworks.icon.childImageSharp.fluid} />
        </div>
        <h1 sx={{ color: `naturalDark` }}>{strapiFrameworks.name}</h1>
      </Grid>
      <h4 sx={{ color: `text` }}>{strapiFrameworks.teaser}</h4>
      <h4 sx={{ color: `text`, fontWeight: `soft`, mt: 3 }}>
        {strapiFrameworks.caption}
      </h4>
    </FrameworkHeader>
  );
};

Header.propTypes ={ 
    strapiFrameworks : PropTypes.object.isRequired 
}

export default Header;
