import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import * as styles from '../../../styles/image.module.css';

export default function Image({imageData, className = styles.defaultImage}) {
  return <GatsbyImage image={imageData} alt={''} className={className} />;
}
