/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

const renderers = {
  link: (props) => {
    console.log(props);
    return (
      <a
        sx={{
          color: "primary",
          textDecoration: "none",
          "&:hover": {
            background:
              "-webkit-linear-gradient(209.68deg, #40C9FF 20.41%, #E81CFF 94.89%)",
            color: "text2",
          },
        }}
        {...props}
        aria-label={props.href}
      >
        {props.children}
      </a>
    );
  },
  image: ({ alt, src }) => {
    return (
      <img
        src={src}
        alt={alt}
        sx={{ variant: `layout.frameworkMain`, p: 0, margin: `auto` }}
      />
    );
  },
};

const FrameworkContent = ({ strapiFrameworks }) => {
  const slide = strapiFrameworks.frameworkSlide;
  return (
    <section sx={{ variant: `layout.frameworkMain` }}>
      <ReactMarkdown
        source={strapiFrameworks.description}
        renderers={renderers}
      />
      <h3 id="who-could-use-this">Who could use this</h3>
      <ReactMarkdown source={strapiFrameworks.whoToUse} renderers={renderers} />
      <h3 id="framework-explanation">Framework explanation</h3>
      <ReactMarkdown
        source={strapiFrameworks.theFramework}
        renderers={renderers}
      />
      {slide && (
        <div>
          <h3 id="slide">Slide</h3>
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
