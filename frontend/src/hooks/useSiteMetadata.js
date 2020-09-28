import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  return { appPath, blogPath, frameworkPath };
};

export default useSiteMetadata;
