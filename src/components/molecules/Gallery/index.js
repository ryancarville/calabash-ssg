import * as styles from '../../../cssModules/imageGallery.module.css'
import 'react-image-gallery/styles/css/image-gallery.css';
import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import Button from '../../atoms/Button'

export default function Gallery({
  images,
  showNav = false,
  showBullets = false,
  slideDuration = 1000,
  swipingTransitionDuration = 1000,
  autoPlay = false,
  slideInterval = 3000
}) {
  const [showThumbs, setShowThumbs] = useState(false);

  const handleShowThumbs = () => setShowThumbs(!showThumbs);

  const getButtonText = () =>
    showThumbs ? 'Hide Thumbnails' : 'Show Thumbnails';
  
  return (
    <div className={styles.slideContainer}>
      <ImageGallery
        showBullets={showBullets}
        thumbnailPosition={'bottom'}
        showThumbnails={showThumbs}
        showNav={showNav}
        slideDuration={slideDuration}
        slideInterval={slideInterval}
        swipingTransitionDuration={swipingTransitionDuration}
        autoPlay={autoPlay}
        lazyLoad={true}
        items={images.map((img) => ({
          original: img.gatsbyImageData.images.fallback.src,
          originalTitle: img.title,
          originalHeight: 'auto',
          thumbnail: img.gatsbyImageData.images.fallback.src
        }))}
      />
      <Button onClick={handleShowThumbs} className={styles.buttonStyle}>
        {getButtonText()}
      </Button>
    </div>
  );
}
