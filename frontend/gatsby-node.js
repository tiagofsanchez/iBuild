const frameworksComponent = require.resolve(`./src/templates/framework.js`)
const _ = require("lodash")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allStrapiFrameworks {
        edges {
          node {
            name
          }
        }
      }
      site { 
        siteMetadata {
          frameworkPath
        }
      }
    }
  `)

  const frameworkPath = data.site.siteMetadata.frameworkPath
  data.allStrapiFrameworks.edges.forEach(edge => {
    const slug = edge.node.name
    actions.createPage({
      path: `${frameworkPath}/${_.kebabCase(slug)}`,
      component: frameworksComponent,
      context: { name: slug },
    })
  })
}
