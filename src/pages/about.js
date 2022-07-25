import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import * as styles from '../cssModules/aboutUs.module.css'
import Image from '../components/atoms/Image'
import PageLayout from '../components/organism/PageLayout'
import useAboutUs from '../hooks/useAboutUs'

export default function About() {
  const { content, image } = useAboutUs();
  return (
    <PageLayout
      pageData={{
        title: 'About',
        description: 'The story of Calabash Villa and its owners.'
      }}
    >
      <section className={styles.aboutUsWrapper}>
        <span className={styles.aboutUsImageWrapper}>
          <Image
            imageData={image.gatsbyImageData}
            className={styles.aboutUsImage}
          />
          <p>
            Ryan and Zeenath on the deck of Casa Rosaline on their first
            Christmas trip as a couple
          </p>
        </span>
        <div className={styles.contentWrapper}>{renderRichText(content)}</div>
      </section>
    </PageLayout>
  );
}
