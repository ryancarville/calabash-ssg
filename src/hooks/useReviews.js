import { useStaticQuery, graphql } from "gatsby";

const useReviews = () => {
  const content = useStaticQuery(graphql`
    {
      allContentfulReviews {
        nodes {
          createdAt
          date
          text {
            raw
          }
          textSnippet {
            textSnippet
          }
          rating
          photo {
            file {
              url
              fileName
            }
          }
          reviewerName
        }
      }
    }
  `);

  return content.allContentfulReviews.nodes;
}

export default useReviews;