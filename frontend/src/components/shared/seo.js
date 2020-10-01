import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import { useLocation } from "@reach/router";
import useImages from "../../hooks/useImages";

const SEO = ({ title, description, image }) => {
  const {
    siteTitle,
    siteDescription,
    siteLanguage,
    siteUrl,
  } = useSiteMetadata();
  const { pathname } = useLocation();
  const { logo } = useImages();
  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}${image || logo}`,
  };

  return (
    <Helmet
      htmlAttributes={{ siteLanguage }}
      title={seo.title}
      defaultTitle={seo.title}
    //   titleTemplate={titleTemplate}
    />
  );
};

export default SEO;
