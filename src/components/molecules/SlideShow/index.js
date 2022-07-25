import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import 'react-image-gallery/styles/css/image-gallery.css';
import Image from '../../atoms/Image'

export default function SlideShow({
  images,
}) {
  const slideContainer = {
    width: '100%',
    height: 'auto',
  };

  return (
    <div style={slideContainer}>
      <Slide arrows={false}>
        {images.map((img) => (
          <Image className='each-slide' imageData={img.gatsbyImageData} />
        ))}
      </Slide>
    </div>
  );
}
