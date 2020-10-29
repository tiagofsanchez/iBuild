import { graphql, useStaticQuery } from "gatsby";

const useImages = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(relativePath: { eq: "framsupIlustration.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        publicURL
      }
      logo: file(relativePath: { eq: "framsupLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        publicURL
      }
      slides: file(relativePath: { eq: "LandingPageSlides.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const imgHero = data.hero.childImageSharp.fluid;
  const logo = data.logo.publicURL;
  const slides = data.slides.childImageSharp.fluid;
  return { imgHero, logo, slides };
};

export default useImages;
