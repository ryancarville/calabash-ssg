import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

export default function Link({path, text, className}) {
  return (
    <GatsbyLink to={path} className={className}>
      {text}
    </GatsbyLink>
  );
}
