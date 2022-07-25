import * as styles from '../../../styles/banner.module.css';
import * as React from "react";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import SlideShow from "../SlideShow"

const Banner = (props) => {
  const {text, images} = props;
  const options = {
    renderMarks: {
      [MARKS.ITALIC]: (text) => <i>{text}</i>
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className='underline'>
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className={styles.bannerHeader}>{children}</h2>;
      },
      [BLOCKS.PARAGRAPH] : (node, children) => {
        return <p className={styles.bannerText}>{children}</p>
      }
    }
  };
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerTextWrapper}>{renderRichText(text, options)}</div>

      <div className={styles.bannerImageWrapper}>
        <SlideShow images={images} />
      </div>
    </div>
  );
}

export default Banner;