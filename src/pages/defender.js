import * as imgStyles from '../styles/image.module.css'
import React from 'react'
import ContentBox from '../components/atoms/ContentBox'
import PageLayout from '../components/organism/PageLayout'
import useDefender from '../hooks/useDefender'

export default function Defender() {
  const {title, subtitle, content, images} = useDefender();

  return (
    <PageLayout
      pageData={{
        title: 'The Defender',
        description: '1987 Land Rover Defender 90 for rent.'
      }}
    >
      <ContentBox
        title={title}
        content={subtitle}
        image={images[0].gatsbyImageData}
        backgroundColor={'Turquoise'}
        color={'White'}
        imgClass={imgStyles.defaultImage}
      />
      <ContentBox
        content={content}
        direction={'right'}
        image={images[1].gatsbyImageData}
        backgroundColor={'Turquoise'}
        color={'White'}
        imgClass={imgStyles.defaultImage}
      />
    </PageLayout>
  );
}
