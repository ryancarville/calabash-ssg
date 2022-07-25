import * as styles from '../../../styles/image.module.css';
import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Image({imageData, className = styles.defaultImage}) {
  return <GatsbyImage image={imageData} alt={''} className={className} />;
}
