/** @jsx jsx */
import { jsx} from "theme-ui"
import styled from "@emotion/styled"

const BackdropContainer = styled.div`
width: 100%;
height: 100%;
position: fixed;
z-index: 50;
left: 0;
top: 0;
`


const Backdrop = () => { 
    return <BackdropContainer sx={{bg: `naturalDark`}}/>
}

export default Backdrop