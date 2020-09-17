/** @jsx jsx */
import { jsx, Card, Box } from "theme-ui"

import ProblemValidationBig from "../../svgs/problemValidationBig.svg"

 const FrameworkCard = () => {
  return (
    <Card>
      <Box sx={{ variant: `cards.header` }}>
        <Box sx={{ width: `252px`, textAlign: `center` }}>
          <ProblemValidationBig />
          <h4 sx={{ m: `0px`, color: `text` }}>Problem Validation</h4>
        </Box>
      </Box>
      <Box sx={{ variant: `cards.description` }}>
        <p sx={{ m: `0px` }}>Are you solving for a good problem?</p>
        <p sx={{ variant: `text.tagline`, mt: `0px` }}>
          This tool helps you to better understand your problem
        </p>
      </Box>
    </Card>
  )
}

export default FrameworkCard