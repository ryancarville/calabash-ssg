import { graphql, useStaticQuery } from "gatsby"

const useHomePage = () => {
  const { allContentfulHomePage } = useStaticQuery(graphql`
    {
      allContentfulHomePage {
        edges {
          node {
            banner {
              bannerText {
                raw
              }
              images {
                gatsbyImageData
              }
            }
            contentBoxes {
              content {
                raw
              }
              image {
                gatsbyImageData
              }
              title
              linkText
              linkPath
            }
            welcomeMessage {
              message {
                raw
              }
            }
          }
        }
      }
    }
  `);

  return allContentfulHomePage.edges[0].node;
}

export  default useHomePage;