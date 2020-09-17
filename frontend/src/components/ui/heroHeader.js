/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Hero from "../../svgs/heroHeader.svg"

const Container = styled.div`
  position: absolute;
  z-index: -10;
  width: 100%;
`

const HeroHeader = () => {
  return (
    <Container>
      <Hero />
    </Container>
  )
}

export default HeroHeader
