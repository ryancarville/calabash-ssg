import { graphql, useStaticQuery } from "gatsby"

const useTheHouse = () => {
  const { allContentfulTheHouse } = useStaticQuery(graphql`
    {
      allContentfulTheHouse {
        edges {
          node {
            title
            content {
              raw
            }
            floorPlans {
              ... on ContentfulPenthousePlan {
                plan {
                  gatsbyImageData
                }
                content {
                  raw
                }
                contentTitle
              }
              ... on ContentfulGardenFlatPlan {
                plan {
                  gatsbyImageData
                }
                content {
                  raw
                }
                contentTitle
              }
            }
            images {
              ... on ContentfulExtiriors {
                images {
                  gatsbyImageData
                  title
                }
              }
              ... on ContentfulGardenFlatExtirior {
                images {
                  gatsbyImageData
                  title
                }
              }
              ... on ContentfulGardenFlatLeftSuite {
                images {
                  gatsbyImageData
                  title
                }
              }
              ... on ContentfulGardenFlatLivingArea {
                images {
                  gatsbyImageData
                  title
                }
              }
              ... on ContentfulGardenFlatRightSuite {
                images {
                  gatsbyImageData
                  title
                }
              }
              ... on ContentfulPenthouseGuestSuite {
                images {
                  gatsbyImageData
                  title
                }
              }
              ... on ContentfulPenthouseLivingArea {
                images {
                  gatsbyImageData
                  title
                }
              }
              ... on ContentfulPenthouseOwnersSuite {
                images {
                  gatsbyImageData
                  title
                }
              }
              ... on ContentfulPoolArea {
                images {
                  gatsbyImageData
                  title
                }
              }
            }
          }
        }
      }
    }
  `);
  console.log(allContentfulTheHouse.edges[0].node)
  return allContentfulTheHouse.edges[0].node;
}

export default useTheHouse;