import { graphql, useStaticQuery } from "gatsby"

const useTheIsland = () => {
  const { allContentfulTheIsland } = useStaticQuery(graphql`
    {
      allContentfulTheIsland {
        edges {
          node {
            contentSections {
              ... on ContentfulBeaches {
                title
                content {
                  raw
                }
                image {
                  gatsbyImageData
                }
                items {
                  content {
                    raw
                  }
                  name
                }
              }
              ... on ContentfulContentBox {
                image {
                  gatsbyImageData
                  title
                }
                content {
                  raw
                }
                linkPath
                linkText
                title
              }
              ... on ContentfulFoodAndDrink {
                content {
                  raw
                }
                image {
                  gatsbyImageData
                }
                title
                items {
                  name
                  content {
                    raw
                  }
                }
              }
              ... on ContentfulThingsToDo {
                title
                content {
                  raw
                }
                image {
                  gatsbyImageData
                }
                items {
                  name
                  content {
                    raw
                  }
                }
              }
            }
            title
          }
        }
      }
    }
  `);
  return allContentfulTheIsland.edges[0].node;
}
export default useTheIsland;