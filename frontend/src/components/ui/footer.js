/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  width: 100%;
  height: 70px;
  display: grid;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer sx={{ bg: `naturalDark` }}>
      <footer sx={{ variant: `layout.footer`, textAlign: `center` }}>
        Designed by tfs
      </footer>
    </FooterContainer>
  );
};

export default Footer;
