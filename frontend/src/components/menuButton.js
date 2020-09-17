/** @jsx jsx */
import { jsx, IconButton } from "theme-ui"
import styled from "@emotion/styled"

import MenuIcon from "../svgs/menuIcon.svg";
import CloseIcon from '../svgs/closeIcon.svg'


const MenuButtonContainer = styled.div`
  width: auto;
  heigh: auto;
  z-index: 100;
  @media (min-width: 768px) {
    display: none;
  }
`

const MenuButton = ({backdropHandler, isOpen}) => {

   

  return (
    <MenuButtonContainer>
      <IconButton onClick={backdropHandler} aria-label='Toggle Menu'>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </MenuButtonContainer>
  )
}

export default MenuButton
