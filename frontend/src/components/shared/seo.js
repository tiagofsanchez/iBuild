import React from "react";
import PropTypes from "prop-types";
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
    author,
  } = useSiteMetadata();
  const { pathname } = useLocation();
  const { logo } = useImages();
  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}${image || logo}`,
  };

  let titleTemplate = "";
  if (siteTitle === seo.title) {
    titleTemplate = siteTitle;
  } else {
    titleTemplate = ` ${siteTitle} - ${seo.title}`;
  }

  return (
    <Helmet
      htmlAttributes={{ siteLanguage }}
      title={seo.title}
      defaultTitle={seo.title}
      titleTemplate={titleTemplate}
    >
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />
      <meta name="TiagoSanchez" content="TiagoSanchez" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
};

export default SEO;
