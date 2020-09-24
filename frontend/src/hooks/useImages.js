import { graphql, useStaticQuery } from "gatsby";

const useImages = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(relativePath: { eq: "iMac.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const imgHero = data.hero.childImageSharp.fluid;
  return { imgHero };
};

export default useImages;
