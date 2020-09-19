/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import styled from "@emotion/styled"

import HeroHeader from "../components/ui/heroHeader"
import Menu from "./menu"
import Backdrop from "../components/ui/backdrop"


const LayoutContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: 50px;
`

const HeroContainer = styled.div`
  display: grid;
  grid-template-rows: repeat (2, auto);
`

const Layout = ({ children , withHero }) => {
  const [isOpen, setIsOpen] = useState(false)
  const backdropHandler = () => setIsOpen(!isOpen)

  return (
    <div>
      <LayoutContainer>
        <HeroContainer>
          {withHero && <HeroHeader />}
          <header sx={{ variant: `layout.header` }}>
            <Menu backdropHandler={backdropHandler} isOpen={isOpen} />
          </header>
        </HeroContainer>
        <main>{children}</main>
       
      </LayoutContainer>
      {isOpen && <Backdrop />}
    </div>
  )
}

export default Layout
