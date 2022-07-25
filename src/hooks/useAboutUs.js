import { graphql, useStaticQuery } from "gatsby"

const useAboutUs = () => {
  const { allContentfulAboutUs } = useStaticQuery(graphql`
    {
      allContentfulAboutUs {
        edges {
          node {
            content {
              raw
            }
            image {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return allContentfulAboutUs.edges[0].node;
}
export default useAboutUs;