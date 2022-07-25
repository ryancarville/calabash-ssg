import { graphql, useStaticQuery } from 'gatsby'

const useContact = () => {
  const { allContentfulContact } = useStaticQuery(graphql`
    {
      allContentfulContact {
        edges {
          node {
            image {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  return allContentfulContact.edges[0].node;
}
export default useContact;