require("dotenv").config();
const path = require(`path`);

module.exports = {
  siteMetadata: {
    author: "tiagofsanchez",
    siteTitle: "Framsup",
    siteDescription:
      "Tools and tricks of this generation, to build the success stories of the next one.",
    siteLanguage: "en",
    siteUrl: "https://www.framsup.com/",
    blogPath: `/blog`,
    appPath: `/app`,
    frameworkPath: `/framework`,
    githubUrl: "",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-emotion",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ID,
      },
    },
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
        apiURL: process.env.GATSBY_STRAPI_API_URL || `http://localhost:1337`, 
        contentTypes: [`frameworks`, `type-of-frameworks`],
        queryLimit: 1000,
      },
    },
    { 
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Framsup`,
        short_name: `Framsup`,
        lang: `en`,
        description:
          "Tools and tricks of this generation, to build the success stories of the next one.",
        start_url: `/?source=pwa'`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./src/images/framsupLogo.png`,
      },
      
    },
    `gatsby-plugin-offline` 
  ],
};
