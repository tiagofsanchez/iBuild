/** @jsx jsx */
import { jsx, Card, Grid } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Img from "gatsby-image";

const HeaderContainer = styled.div`
  border-radius: 16px 16px 0px 0px;
  padding: 16px;
  display: grid;
  justify-content: center;
  height: 258px;
  @media (max-width: 690px) {
    height: auto;
  }
`;

const DescriptionContainer = styled.div`
  display: grid;
  height: 180px;
  padding: 16px;
  @media (max-width: 690px) {
    height: auto;
  }
`;

const FrameworkCard = ({ name, teaser, caption, url, icon }) => {
  return (
    <Card>
      <Link to={url} sx={{ textDecoration: `none` }}>
        <HeaderContainer sx={{ bg: `backgroundHeader` }}>
          <Grid
            sx={{ width: `252px`, textAlign: `center`, justifyItems: `center` }}
          >
            <div sx={{ width: "120px" }}>
              <Img fluid={icon} />
            </div>
            <h4 sx={{ m: `0px`, color: `text` }}>{name}</h4>
          </Grid>
        </HeaderContainer>
        <DescriptionContainer>
          <Grid>
            <p sx={{ m: `0px` }}>{teaser}</p>
            <p sx={{ variant: `text.tagline`, mt: `0px` }}>{caption}</p>
          </Grid>
        </DescriptionContainer>
      </Link>
    </Card>
  );
};

export default FrameworkCard;
