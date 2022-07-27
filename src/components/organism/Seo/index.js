import * as React from "react";
import { Helmet } from "react-helmet";

const Seo = (props) => {
  const {
    title = 'Bequia - Luxury Holiday Villa Rental - Calabash Villa',
    description = 'Luxury private 4 bedroom en suite holiday rental villa on Bequia, SVG',
    link = 'https://www.calabashvillabequia.com',
    imageUrl = 'https://images.ctfassets.net/zqcxum68ie2w/35syqdr7UnBMBdDsUetNN0/c7c38ba8de0c17a856956f9be3a35fa8/airbnbDeck-03.jpg'
  } = props.pageData;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={link} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={link} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageUrl} />
      
      <style>
        {{fontawesome-css}}
      </style>
    </Helmet>
  );
}

export default Seo;