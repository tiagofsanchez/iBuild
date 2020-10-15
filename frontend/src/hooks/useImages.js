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
    }
  `);
  const imgHero = data.hero.childImageSharp.fluid;
  const logo = data.hero.publicURL;
  return { imgHero, logo };
};

export default useImages;
