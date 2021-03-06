const frameworksComponent = require.resolve(`./src/templates/framework.js`);
const _ = require("lodash");

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allStrapiFrameworks {
        edges {
          node {
            name
            type {
              type
            }
          }
        }
      }
      site {
        siteMetadata {
          frameworkPath
          appPath
        }
      }
    }
  `);

  const frameworkPath = data.site.siteMetadata.frameworkPath;
  const appPath = data.site.siteMetadata.appPath;
  data.allStrapiFrameworks.edges.forEach((edge) => {
    const slug = edge.node.name;
    const type = edge.node.type.type;
    actions.createPage({
      path: `${appPath}${frameworkPath}/${_.kebabCase(slug)}`,
      component: frameworksComponent,
      context: { name: slug, type },
    });
  });
};
