import { graphql, useStaticQuery } from 'gatsby'

const useSeasonsAndRates = () => {
  const { allContentfulSeasonsAndRates } = useStaticQuery(graphql`
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
  console.log(allContentfulSeasonsAndRates.edges[0].node);
  return allContentfulSeasonsAndRates.edges[0].node;
};
export default useSeasonsAndRates;