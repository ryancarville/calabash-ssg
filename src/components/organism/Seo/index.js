import * as React from "react";
import HelmetExport from "react-helmet";

const Seo = (props) => {
  const {
    title,
    description,
  } = props.pageData;

  return (
    <HelmetExport
      title={title}
      description={description}
    />
  )
}

export default Seo;