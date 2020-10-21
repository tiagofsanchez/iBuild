/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

const FrameworkContent = ({ strapiFrameworks }) => {
  const slide = strapiFrameworks.frameworkSlide;
  return (
    <section sx={{ variant: `layout.frameworkMain` }}>
      <ReactMarkdown source={strapiFrameworks.description} />
      <h3>Who could use this</h3>
      <ReactMarkdown source={strapiFrameworks.whoToUse} />
      <h3>Framework explanation</h3>
      <ReactMarkdown source={strapiFrameworks.theFramework} />
      {slide && (
        <div>
          <h3>Slide</h3>
          <p>
            Here you will find a slide example. Soon we will implement a feature
            for anyone to download all the tools that we are building.
          </p>
          <Img fluid={slide.childImageSharp.fluid} />
        </div>
      )}
    </section>
  );
};

FrameworkContent.propTypes = {
  strapiFrameworks: PropTypes.object.isRequired,
};

export default FrameworkContent;
