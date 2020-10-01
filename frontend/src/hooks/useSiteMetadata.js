import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          siteTitle
          siteDescription
          siteLanguage
          siteUrl
          appPath
          blogPath
          frameworkPath
        }
      }
    }
  `);
  const appPath = data.site.siteMetadata.appPath;
  const blogPath = data.site.siteMetadata.blogPath;
  const frameworkPath = data.site.siteMetadata.frameworkPath;
  const siteTitle = data.site.siteMetadata.siteTitle;
  const siteDescription = data.site.siteMetadata.siteDescription;
  const siteLanguage = data.site.siteMetadata.siteLanguage;
  const siteUrl = data.site.siteMetadata.siteUrl;
  const author = data.site.siteMetadata.author;

  return {
    appPath,
    blogPath,
    frameworkPath,
    siteTitle,
    siteDescription,
    siteLanguage,
    siteUrl,
    author
  };
};

export default useSiteMetadata;
