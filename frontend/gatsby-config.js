require("dotenv").config();
const path = require(`path`);

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
    "gatsby-transformer-sharp", 
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
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
        apiURL:  process.env.GATSBY_STRAPI_API_URL || `http://localhost:1337`, //I know that I will need to implement the .env
        contentTypes: [`frameworks` , `type-of-frameworks`],
        queryLimit: 1000,
      },
    },
  ],
}
