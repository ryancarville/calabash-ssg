import React, { useState } from 'react'
import 'react-image-gallery/styles/css/image-gallery.css';
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

  const slideContainer = {
    width: '100%',
    height: 'auto',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-start'
  };

  const buttonStyle = {
    width: '10em',
    marginTop: '1em',
    marginRight: '2em',
    padding: '.5em',
    fontSize: '1em',
    backgroundColor: 'lightBlue',
    border: 'none',
    borderRadius: '1em',
    color: 'white',
    cursor: 'pointer',
    float: 'right'
  }
  return (
    <div style={slideContainer}>
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
      <Button onClick={handleShowThumbs} style={buttonStyle}>{getButtonText()}</Button>
    </div>
  );
}
