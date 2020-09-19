/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const AboutFooterContainer = styled.div`
 width: 100%
`;

const AboutFooter = () => {
  return (
    <AboutFooterContainer>
      <h4 sx={{ mt: `0px`, color: `text` }}>About</h4>
      <p>
        More than a collection of frameworks and a taxonomy directory, we want
        to create a community of like minded people that are passionate about
        working with startups and helping them grow by working with cooperates.
      </p>
      <p>Join our Slack channel</p>
    </AboutFooterContainer>
  );
};

export default AboutFooter;
