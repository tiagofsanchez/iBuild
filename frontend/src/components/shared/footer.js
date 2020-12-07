/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer sx={{ bg: `naturalDark` }}>
      <footer sx={{ variant: `layout.footer`, textAlign: `center` }}>
        <Flex>
          <p sx={{ my: `0px`, mx: `10px`, color: `text2` }}>Designed by</p>
          <Link
            href="https://www.tiagofsanchez.com/"
            target="_blank"
            rel="noreferrer"
            sx={{ variant: `links.primary`, color: `text2`, padding: `0px` }}
          >
            Tiago F. Sanchez
          </Link>
        </Flex>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
