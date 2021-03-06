/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import MenuButton from "./menuButton";
import FramesupLogo from "../../svgs/framsupLogo.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  width: auto;
  height: auto;
  z-index: 100;
  position: relative;
`;

const MenuItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-gap: 30px;
  }
`;

const NavDesktop = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavMobile = styled.nav`
  z-index: 1000;
  margin-top: 50px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
`;

const active = {
  background: "linear-gradient(209.68deg, #40C9FF 20.41%, #E81CFF 94.89%)",
};

const menuNavItems = (
  <MenuItems sx={{ variant: `text.menu` }}>
    <li>
      <Link
        to="/"
        activeClassName="active"
        sx={{ variant: `links.primary`, color: `text2` }}
        activeStyle={active}
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/frameworks"
        activeClassName="active"
        sx={{ variant: `links.primary`, color: `text2` }}
        activeStyle={active}
      >
        Frameworks
      </Link>
    </li>
  </MenuItems>
);

const Menu = ({ backdropHandler, isOpen }) => {
  return (
    <div>
      <Container>
        <Link to="/" sx={{ variant: `links.primary` }}>
          <IconContainer>
            <FramesupLogo />
          </IconContainer>
        </Link>
        <NavDesktop>{menuNavItems}</NavDesktop>
        <MenuButton backdropHandler={backdropHandler} isOpen={isOpen} />
      </Container>
      {isOpen && <NavMobile>{menuNavItems}</NavMobile>}
    </div>
  );
};

export default Menu;
