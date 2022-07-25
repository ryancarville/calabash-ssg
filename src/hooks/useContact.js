import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

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