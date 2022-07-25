import * as imgStyle from '../styles/image.module.css'
import * as styles from '../styles/accordionItem.module.css';
import React from 'react'
import ContentBox from '../components/atoms/ContentBox'
import PageLayout from '../components/organism/PageLayout'
import useTheIsland from '../hooks/useTheIsland'
import TextBox from '../components/atoms/TextBox'
import AccordionItem from '../components/atoms/AccordionItem'

export default function Bequia() {
  const {title, contentSections} = useTheIsland();
  console.log(title, contentSections)

  return (
    <PageLayout
      pageData={{
        title: 'Bequia',
        description: 'The story of Calabash Villa and its owners.'
      }}
    >
      <h1 style={{padding: '1em', textAlign: 'center', fontWeight: 100, color: 'lightgrey'}}>{title}</h1>
      {contentSections.map((sec, i) => {
        return !!sec.image ? (
          <ContentBox
            title={sec.title}
            content={sec.content}
            image={sec.image.gatsbyImageData}
            imgClass={imgStyle.defaultImage}
            direction={i % 2 === 0 ? 'right' : 'left'}
            backgroundColor={i % 2 === 0 ? 'White' : 'Turquoise'}
            color={i % 2 === 0 ? 'Turquoise' : 'White'}
            subContent={
              sec.items && (
                <div className={styles.accordionListWrapper}>
                  {sec.items.map((item) => (
                    <AccordionItem title={item.name} content={item.content} />
                  ))}
                </div>
              )
            }
          />
        ) : (
          <>
            <TextBox title={sec.title} content={sec.content} />
          </>
        );

      })}
    </PageLayout>
  );
}
