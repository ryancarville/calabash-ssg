import * as React from "react";
import HelmetExport from "react-helmet";

const Seo = (props) => {
  const {
    title,
    description,
    link
  } = props.pageData;

  return (
    <HelmetExport>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:type' content='website' />
      <link rel='canonical' href={link} />
    </HelmetExport>
  );
}

export default Seo;