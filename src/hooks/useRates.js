import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const useRates = () => {
  const { allContentfulRates } = useStaticQuery(graphql`
    {
      allContentfulSeasonsAndRates {
        edges {
          node {
            title
            subtitle
            seasons {
              title
              start(formatString: "")
              end(formatString: "")
            }
            rateData {
              title
              currency
              low
              mid
              high
              christmas
              easter
            }
          }
        }
      }
    }
  `);
  return allContentfulRates.edges[0].node;
}
export default useRates;