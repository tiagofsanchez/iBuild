/** @jsx jsx */
import { jsx, Card, Box, Grid } from "theme-ui";
import { Link } from "gatsby";
import Img from "gatsby-image";

const FrameworkCard = ({ name, teaser, caption, url, icon }) => {
  return (
    <Card>
      <Link to={url} sx={{ textDecoration: `none` }}>
        <Box sx={{ variant: `cards.header` }}>
          <Grid
            sx={{ width: `252px`, textAlign: `center`, justifyItems: `center` }}
          >
            <div sx={{ width: "120px" }}>
              <Img fluid={icon} />
            </div>
            <h4 sx={{ m: `0px`, color: `text` }}>{name}</h4>
          </Grid>
        </Box>
        <Box sx={{ variant: `cards.description` }}>
          <p sx={{ m: `0px` }}>{teaser}</p>
          <p sx={{ variant: `text.tagline`, mt: `0px` }}>{caption}</p>
        </Box>
      </Link>
    </Card>
  );
};

export default FrameworkCard;
