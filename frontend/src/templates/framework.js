/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import ReactMarkdown from 'react-markdown'

import Layout from "../components/layout"

const Framework = ({ pageContext, data }) => {
  const framework = pageContext.name
  const { strapiFrameworks } = data

  return (
    <Layout withHero={true}>
      <section sx={{ variant: `layout.main` }}>
        <h1>{framework}</h1>
        <ReactMarkdown source={strapiFrameworks.description}/>
        <h3>Who could use this</h3>
        <ReactMarkdown source={strapiFrameworks.whoToUse}/>
        <h3>Framework explanation</h3>
        <ReactMarkdown source={strapiFrameworks.theFramework}/>
      </section>
    </Layout>
  )
}

export const framework = graphql`
  query MyQuery($name: String!) {
    strapiFrameworks(name: { eq: $name }) {
      name
      description
      whoToUse
      theFramework
    }
  }
`

export default Framework
