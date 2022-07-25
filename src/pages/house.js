import * as imgStyles from '../cssModules/image.module.css'
import React from 'react'
import ContentBox from '../components/atoms/ContentBox'
import Gallery from '../components/molecules/Gallery'
import PageLayout from '../components/organism/PageLayout'
import useTheHouse from '../hooks/useTheHouse'

export default function House() {
  const {title, content, images, floorPlans} = useTheHouse();
  const tmpImages = images.map(imgs => [].concat(imgs.images))
  const allImages = tmpImages.flat(1);

  return (
    <PageLayout
      pageData={{
        title: 'Calabash Villa - The House',
        description: 'Calabash Villa - Private Luxury Villa on Bequia, SVG'
      }}
    >
      <Gallery
        images={allImages}
        showNav={true}
        showBullets={true}
        autoPlay={false}
        slideDuration={1500}
        slideInterval={5000}
      />
      <ContentBox
        title={title}
        content={content}
      />
      {floorPlans.map((plan, i) => {
        const isOdd = i % 2 === 0;
        return (
          <ContentBox
            direction={isOdd ? 'right' : 'left'}
            title={plan.contentTitle}
            content={plan.content}
            externalLinkHref={plan.plan.gatsbyImageData.images.fallback.src}
            externalLinkText={'See Floor Plan'}
            image={
              i === 0
                ? allImages[0].gatsbyImageData
                : allImages[20].gatsbyImageData
            }
            backgroundColor={'Turquoise'}
            color={'White'}
            imgClass={imgStyles.defaultImage}
          />
        );
      })}
    </PageLayout>
  );
}
