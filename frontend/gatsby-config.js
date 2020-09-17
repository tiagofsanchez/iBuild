/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: "Build Stuff",
    blogPath: `/blog`, 
    appPath: `/app`,
    frameworkPath: `/framework`, 
    githubUrl: ''
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-emotion",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `./src/images/iKLogo.png`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`, //I know that I will need to implement the .env
        contentTypes: [`frameworks` , `type-of-frameworks`],
        queryLimit: 1000,
      },
    },
  ],
}
