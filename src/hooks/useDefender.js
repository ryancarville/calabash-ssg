import { graphql, useStaticQuery } from "gatsby"

const useDefender = () => {
  const { allContentfulTheDefender } = useStaticQuery(graphql`
    {
      allContentfulTheDefender {
        edges {
          node {
            images {
              gatsbyImageData
            }
            title
            subtitle {
              raw
            }
            content {
              raw
            }
          }
        }
      }
    }
  `);
  return allContentfulTheDefender.edges[0].node;
}

export default useDefender;